import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Legal from "../elements/legal/Legal";

const data = `Last updated: 01/06/2026

1. Acceptance of Terms
By accessing or using Elementy, you agree to be bound by these Terms of Service. If you do not agree, you may not use the platform.

2. Use of the Service
You agree to use Elementy only for lawful purposes and in accordance with these terms. You may not misuse the service, attempt to disrupt it, or access it using unauthorized means.

3. Accounts
You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.

4. Intellectual Property
All content, features, and functionality on Elementy are owned by Elementy or its licensors and are protected by intellectual property laws. You may not copy, modify, or distribute our content without permission.

5. Termination
We may suspend or terminate your access to Elementy at any time if you violate these terms or misuse the platform.

6. Disclaimer of Warranties
Elementy is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.

7. Limitation of Liability
To the maximum extent permitted by law, Elementy shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.

8. Changes to These Terms
We may update these Terms of Service from time to time. Changes will be posted on this page with an updated “Last updated” date.

9. Contact Us
If you have questions about these Terms, contact us at:
Email: support@elementy.com
Website: Elementy`;

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <Legal title="Terms of Service" description={data} />
      <Footer />
    </>
  );
}
