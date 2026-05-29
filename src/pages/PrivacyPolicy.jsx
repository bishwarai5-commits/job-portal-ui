import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: January 1, 2026</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We collect information you provide directly when you create an account or use our services:
            </p>
            <ul className="space-y-3">
              {[
                "Name, email address, and password when you register",
                "Profile information such as skills, experience, and location",
                "Job applications and saved job preferences",
                "Messages sent through our contact form",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your information is used to provide and improve the JobPortal service — including
              authenticating your account, matching you with relevant job listings, and communicating
              important updates. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Storage</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              JobPortal currently stores user data in your browser's localStorage. This means your data
              stays on your device and is not transmitted to an external server. Clearing your browser
              data will remove your account information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You have the right to access, correct, or delete your personal data at any time. You can
              update your profile from the Profile page or contact us to request full data removal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              For privacy-related questions, please{" "}
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/terms-of-service" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
