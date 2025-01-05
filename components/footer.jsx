import { Github, Linkedin, Send, Youtube, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-indigo-950 text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-5">
        {/* Social Media Links */}
        <div className="flex gap-3 mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors "
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-xs lg:text-sm text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Tizazab Ayana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
