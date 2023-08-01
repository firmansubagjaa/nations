import Button from "../Elements/button";

export default function Hero() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp9970239.jpg)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">Selamat Datang!</h1>
          <p className="py-6">Mari jelajahi dunia melalui informasi unik tentang setiap negara, yang akan membuka mata Anda ke keajaiban budaya, keindahan alam, dan tradisi yang menakjubkan.</p>
          <Button link={"/explore"} className="btn btn-primary btn-wide">
            Mulai
          </Button>
        </div>
      </div>
    </div>
  );
}
