import { ContactFormSchema } from '@/lib/formSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body with Zod schema
    const validatedData = ContactFormSchema.parse(body);

    // TODO: Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with email service (SendGrid, Mailgun, etc.)
    // 4. Send confirmation email to user

    console.log('Contact Submission:', validatedData);

    // For now, return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);

    // Handle validation errors
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          error: error.message,
        },
        { status: 400 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
