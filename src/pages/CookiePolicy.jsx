import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-3">
            Cookie Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: January 1, 2026</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What Are Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help us
              remember your preferences, keep you logged in, and understand how you use JobPortal so we
              can improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How We Use Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              JobPortal uses the following types of cookies:
            </p>
            <ul className="space-y-3">
              {[
                {
                  name: "Essential Cookies",
                  desc: "Required for the site to function. These include authentication tokens and session data stored in localStorage (e.g., jobPortalUser, authToken).",
                },
                {
                  name: "Preference Cookies",
                  desc: "Remember your settings such as your chosen theme (light or dark mode), saved jobs, and applied job history.",
                },
                {
                  name: "Analytics Cookies",
                  desc: "Help us understand which pages are visited most and how users navigate the site. This data is aggregated and anonymous.",
                },
              ].map(({ name, desc }) => (
                <li key={name} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">{name}: </span>
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Managing Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You can control cookies through your browser settings. Disabling essential cookies may affect
              your ability to log in or use certain features. Clearing localStorage will remove saved
              preferences such as your theme and saved jobs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Third-Party Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We do not currently use third-party advertising cookies. If this changes, we will update
              this policy and notify users in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have questions about our use of cookies, please{" "}
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/privacy-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
