import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Legal from "../elements/legal/Legal";

const data = `Last updated: 01/06/2026

1. What Are Cookies?
Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and understand how users interact with the site.

2. How Elementy Uses Cookies
Elementy uses cookies and similar technologies to:
Ensure the website functions correctly
Improve performance and user experience
Understand how users interact with the platform
Maintain security and prevent abuse
We do not use cookies to personally identify you without your consent.

3. Types of Cookies We Use

Essential Cookies
These cookies are required for the website to function and cannot be disabled. They include cookies that:
Enable core functionality
Maintain security
Support authentication and session management

Analytics & Performance Cookies
These cookies help us understand how visitors use Elementy so we can improve it. They may collect information such as:
Pages visited
Time spent on the site
Device and browser type (anonymized)
Analytics data is aggregated and does not directly identify individual users.

Functional Cookies
These cookies remember choices you make (such as preferences) to provide a more personalized experience.

4. Third-Party Cookies
Elementy may use trusted third-party services (such as analytics or infrastructure providers) that set cookies on our behalf to help us operate and improve the platform.
These third parties are contractually obligated to handle data responsibly and in compliance with applicable privacy laws.

5. Managing Cookies
You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of Elementy.

Helpful links for managing cookies:
Chrome
Safari
Firefox
Edge

6. Changes to This Cookie Policy
We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. Any updates will be posted on this page with a revised “Last updated” date.

7. Contact Us
If you have questions about this Cookie Policy or how Elementy uses cookies, please contact us at:
Email: support@elementy.com
Website: Elementy`;

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <Legal title="Cookie Policy" description={data} />
      <Footer />
    </>
  );
}
