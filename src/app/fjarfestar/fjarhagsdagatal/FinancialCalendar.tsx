export default function FinancialCalendar() {
  return (
    <div className="relative flex-col gap-8 container flex py-[5%]">
      <p className="text-[64px] text-stodirPrimary leading-tight font-bold">
        Fjárhagsdagatal
      </p>
      <p className="text-[24px] text-stodirPrimary ">
        Fjárhagsdagatal Stoðir hf. fyrir árið 2025 er sem hér segir:
      </p>
      <div className="pl-[5%] w-[600px] gap-8 flex flex-col">
        <ul className="list-disc pl-6 text-[20px] text-stodirPrimary space-y-2">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <p className="text-[16px] text-stodirPrimary ">
        Birting fjárhagsupplýsinga mun eiga sér stað eftir lokun markaða.
        <br />
        Vinsamlegast athugið að dagsetningarnar eru birtar með fyrirvara up
        breyitingar.
      </p>
    </div>
  );
}
