import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <Container className="h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            IL
          </div>

          <span className="text-2xl font-bold text-slate-900">
            InvoiceLoop
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-slate-600 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#how" className="hover:text-blue-600 transition">
            How it Works
          </a>

          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="secondary">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

        {/* Mobile */}
        <button className="lg:hidden">
          <Menu size={28} />
        </button>

      </Container>
    </header>
  );
};

export default Navbar;