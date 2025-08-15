export default function Strategy() {
  return (
    <div className="relative bg-[url('/ashGlacier.png')] bg-cover bg-center h-screen">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>

      <div className="relative flex-col gap-8 container flex py-[5%]">
        <p className="text-[64px] text-stodirPrimary font-bold">Stefna</p>
        <p className="text-[32px] text-stodirPrimary font-semibold w-[80%]">
          Fjárfestingarstefna Stoða endurspeglar þá staðreynd að félagið er í
          meirihlutaeigu einkafjárfesta, sem hugsa til langs tíma.
        </p>
        <div className="pl-[5%] w-[600px] gap-8 flex flex-col">
          <ul className="list-disc pl-5 text-[20px] text-stodirPrimary space-y-4">
            <li>
              Langtímamarkmið Stoða er að auka verðmæti hluthafa sinna með því
              að fjárfesta í fáum, stórum verkefnum, þar sem félagið getur haft
              virka aðkomu
            </li>
            <li>
              Stoðir fjárfesta í skráðum og óskráðum eignum, hlutabréfum,
              skuldabréfum og lánveitingum.
            </li>
            <li>
              Íhaldssöm nálgun varðandi skuldsetningu, sem skal ávallt vera
              undir 25%.
            </li>
            <li>
              Við greiningu og þróun fjárfestingarverkefna nýta Stoðir sér
              reynslu og þekkingu hluthafa og samstarfsaðila, innanlands sem
              utan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
