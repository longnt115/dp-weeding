import { RSVPFormSchema } from '@/lib/formSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body with Zod schema
    const validatedData = RSVPFormSchema.parse(body);

    // TODO: Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with email service (SendGrid, Mailgun, etc.)

    console.log('RSVP Submission:', validatedData);

    // For now, return success response
    return NextResponse.json(
      {
        success: true,
        message: 'RSVP received successfully',
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('RSVP API Error:', error);

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
