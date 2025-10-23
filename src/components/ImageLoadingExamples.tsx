/**
 * ImageWithLoader Component Test Examples
 *
 * This file demonstrates various use cases of the ImageWithLoader component
 */

import ImageWithLoader from "@/components/common/ImageWithLoader";

export default function ImageLoadingExamples() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Image Loading States Demo
      </h1>

      {/* Example 1: Large Image with Loading State */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Large Image (with loader)</h2>
        <div className="w-full max-w-2xl mx-auto h-96 bg-gray-100 rounded-2xl overflow-hidden">
          <ImageWithLoader
            src="/assets/avatar/groom.jpg"
            alt="Portrait example"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Shimmer animation + spinner while loading, then smooth fade-in
        </p>
      </section>

      {/* Example 2: Multiple Images Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Image Grid</h2>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-xl overflow-hidden"
            >
              <ImageWithLoader
                src={`/assets/venue/venue-${i}.jpg`}
                alt={`Venue ${i}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Each image loads independently with its own loading state
        </p>
      </section>

      {/* Example 3: Icon without Loading State */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Small Icon (loader disabled)
        </h2>
        <div className="flex items-center justify-center gap-4">
          <ImageWithLoader
            src="/assets/icon/instagram-color-svgrepo-com.svg"
            alt="Instagram"
            width={32}
            height={32}
            showLoader={false}
          />
          <span className="text-lg">Instagram Icon (no loader)</span>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          For small icons, loading state can be disabled with showLoader=false
        </p>
      </section>

      {/* Example 4: Priority Image */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Priority Image (above fold)</h2>
        <div className="w-64 h-64 bg-gray-100 rounded-2xl overflow-hidden mx-auto">
          <ImageWithLoader
            src="/assets/avatar/bride.jpg"
            alt="Priority example"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          priority prop ensures this loads first (for above-the-fold content)
        </p>
      </section>

      {/* Loading State Details */}
      <section className="bg-wedding-light p-6 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Loading State Details</h2>
        <ul className="space-y-2 text-gray-800">
          <li>
            ✅ <strong>Shimmer Effect:</strong> 1.5s infinite gradient animation
          </li>
          <li>
            ✅ <strong>Spinner Color:</strong> Wedding gold (#d4af37) on top
            border
          </li>
          <li>
            ✅ <strong>Fade Duration:</strong> 500ms smooth opacity transition
          </li>
          <li>
            ✅ <strong>Responsive:</strong> Spinner 10px (mobile) → 12px
            (desktop)
          </li>
          <li>
            ✅ <strong>Background:</strong> Gray-100 prevents white flash
          </li>
          <li>
            ✅ <strong>Optional:</strong> Can disable for icons with
            showLoader=false
          </li>
        </ul>
      </section>

      {/* Test with Slow Network */}
      <section className="bg-wedding-gold/10 p-6 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🧪 Testing Tips</h2>
        <div className="space-y-2 text-gray-800">
          <p>
            <strong>To see loading states:</strong>
          </p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Open Chrome DevTools (F12)</li>
            <li>Go to Network tab</li>
            <li>
              Select &ldquo;Slow 3G&rdquo; or &ldquo;Fast 3G&rdquo; from
              throttling dropdown
            </li>
            <li>Disable cache (checkbox at top)</li>
            <li>Refresh page to see shimmer animations</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
