import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  whoWeAre: [
    { name: 'About MiDA', href: '/who-we-are/about' },
    { name: 'Our Board', href: '/who-we-are/board' },
    { name: 'Leadership', href: '/who-we-are/leadership' },
    { name: 'Partners', href: '/who-we-are/partners' },
  ],
  whatWeDo: [
    { name: 'Power Compact', href: '/what-we-do/power-compact' },
    { name: 'Agricultural Projects', href: '/what-we-do/agriculture' },
    { name: 'Economic Enclaves', href: '/what-we-do/economic-enclaves' },
    { name: 'Digital Youth Hubs', href: '/what-we-do/digital-youth-hubs' },
  ],
  resources: [
    { name: 'News & Updates', href: '/media' },
    { name: 'Publications', href: '/resources/publications' },
    { name: 'Reports', href: '/resources/reports' },
    { name: 'FAQs', href: '/resources/faqs' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-mida-navy text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center font-serif font-bold text-xl text-secondary-foreground">
                MiDA
              </div>
              <div>
                <span className="font-serif font-bold text-xl block">Millennium Development</span>
                <span className="text-sm text-white/70">Authority</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
              Implementing Ghana's development projects in partnership with the 
              Millennium Challenge Corporation to reduce poverty through economic growth.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@mida.gov.gh" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                info@mida.gov.gh
              </a>
              <a href="tel:+233302770611" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                +233 302 770 611
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>No. 5 Nortei Ababio Street,<br />Airport Residential Area, Accra</span>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Who We Are</h4>
            <ul className="space-y-3">
              {footerLinks.whoWeAre.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">What We Do</h4>
            <ul className="space-y-3">
              {footerLinks.whatWeDo.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Millennium Development Authority. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
