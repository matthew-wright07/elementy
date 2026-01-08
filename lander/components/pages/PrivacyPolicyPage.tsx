import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Legal from "../elements/legal/Legal";

const data = `Last updated: 01/06/2026

1. Information We Collect
We may collect information you provide directly, such as account details, as well as limited technical data like device type and usage information.

2. How We Use Information
We use your information to:
Provide and maintain the service
Improve functionality and user experience
Ensure security and prevent abuse
Communicate important updates

3. Data Sharing
We do not sell your personal data. We may share information with trusted third-party providers only as necessary to operate the service and comply with the law.

4. Data Security
We take reasonable measures to protect your information, but no system is completely secure.

5. Your Rights
Depending on your location, you may have rights to access, correct, or delete your personal information.

6. Cookies
Elementy uses cookies and similar technologies. For details, please review our Cookie Policy.

7. Changes to This Privacy Policy
We may update this policy from time to time. Updates will be posted here with a revised “Last updated” date.

8. Contact Us
If you have questions about this Privacy Policy, contact us at:
Email: support@elementy.com
Website: Elementy`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <Legal title="Privacy Policy" description={data} />
      <Footer />
    </>
  );
}
