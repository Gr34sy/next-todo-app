import { Logo } from "../Logo/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copytight">
        <h2 className="copyright__header">
          <Logo />
          Copyright by Peter Slupski 2023 &copy;
        </h2>
      </div>

      <div className="footer__links">
        <p>My LinkedIn</p>
        <p>Check my profile page</p>
      </div>
    </footer>
  );
}
