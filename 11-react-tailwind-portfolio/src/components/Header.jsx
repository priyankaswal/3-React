import paasportPhoto from "../assets/paasport.jpg";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center mb-6">
      <div>
        <div className="font-bold text-4xl">Priyank Aswal</div>
        <div className="text-xl">Full Stack Developer</div>
      </div>
      <img className="rounded-full w-16 " src={paasportPhoto} alt="" />
    </header>
  );
}

export default Header;
