import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: January 1, 2026</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing or using JobPortal, you agree to be bound by these Terms of Service. If you
              do not agree with any part of these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Use of the Platform</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              You agree to use JobPortal only for lawful purposes and in accordance with these terms:
            </p>
            <ul className="space-y-3">
              {[
                "You must provide accurate information when creating your account",
                "You are responsible for maintaining the security of your account credentials",
                "Employers may only post genuine job listings for real positions",
                "Job seekers may not submit false or misleading application information",
                "Automated scraping or bulk data extraction is prohibited",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All content, branding, and code on JobPortal is the property of JobPortal and may not be
              reproduced or distributed without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              JobPortal is provided "as is" without warranties of any kind. We are not liable for any
              employment outcomes, data loss, or damages arising from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update these terms from time to time. Continued use of JobPortal after changes are
              posted constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Questions about these terms? Please{" "}
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/privacy-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
