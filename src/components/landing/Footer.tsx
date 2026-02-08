const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} «Свой в Альфе» — партнёрская программа Альфа-Банка
        </p>
        <p className="text-xs text-muted-foreground/60">
          Информация на сайте носит ознакомительный характер и не является публичной офертой.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
