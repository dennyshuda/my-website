export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="m-20 text-center ">
      <h2>Copyright &copy; {year} </h2>
    </footer>
  );
}
