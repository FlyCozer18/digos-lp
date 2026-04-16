export const metadata = {
  title: 'Digos Online | Calçados com estilo e conforto',
  description: 'Encontre os calçados mais desejados da Digos Online e compre com segurança na loja oficial.'
};

export default function Page() {
  const storeUrl = 'https://www.mercadolivre.com.br/loja/digos-online';

  const products = [
    {
      name: 'Tênis New Balance 530 Feminino',
      ml: 'https://produto.mercadolivre.com.br/MLB-5878842550-tnis-feminino-new-balance-530-esportivo-conforto-original-_JM?searchVariation=186665491546&pdp_filters=official_store%3A51061#polycard_client=search-desktop&searchVariation=186665491546&search_layout=grid&position=2&type=item&tracking_id=c9e2c2c4-b38f-4c01-b0db-e088f907edbb',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776351516/image_snd8pi.png',
      badge: 'Mais vendidos',
      badgeClass: 'bg-red-900 text-white',
    },
    {
      name: 'Tênis Ramarim Chunky Plataforma',
      ml: 'https://www.mercadolivre.com.br/tenis-feminino-ramarim-chunky-sneaker-street-casual/up/MLBU3886169719',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776351978/image_quhxpi.png',
      badge: 'Mais vendidos',
      badgeClass: 'bg-red-900 text-white',
    },
    {
      name: 'Papete Moleca Feminina Com Brilho',
      ml: 'https://produto.mercadolivre.com.br/MLB-3444315887-sandalia-feminina-brilho-strass-tendncia-moda-original-_JM',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776351692/image_nkytr5.png',
      badge: 'Mais vendidos',
      badgeClass: 'bg-red-900 text-white',
    },
    {
      name: 'Rasteirinha Vizzano Feminina Tira H',
      ml: 'https://www.mercadolivre.com.br/rasteirinha-vizzano-feminina-slide-tira-h-leve-confortavel/up/MLBU3748576564',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776351886/image_ygzcuz.png',
      badge: 'Mais vendidos',
      badgeClass: 'bg-red-900 text-white',
    },
    {
      name: 'Sandália Vizzano Feminina Salto',
      ml: 'https://produto.mercadolivre.com.br/MLB-3721922222-sandalia-feminina-salto-grosso-com-fivela-conforto-original-_JM',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776352154/image_idnp5s.png',
      badge: 'Mais vendidos',
      badgeClass: 'bg-red-900 text-white',
    },
    {
      name: 'Bota Feminina Vizzano Tendência Outono',
      ml: 'https://www.mercadolivre.com.br/bota-feminina-vizzano-cano-curto-salto-confortavel-original/up/MLBU3849668885',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776353235/image_bd87d5.png',
      badge: 'Coleção outono',
      badgeClass: 'bg-orange-500 text-white',
    },
    {
      name: 'Bota Vizzano Slouchy Camurça',
      ml: 'https://www.mercadolivre.com.br/bota-vizzano-feminina-slouchy-bico-fino-camurca-confortavel/up/MLBU3858515319',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776353301/image_wgym5d.png',
      badge: 'Coleção outono',
      badgeClass: 'bg-orange-500 text-white',
    },
    {
      name: 'Bota Dakota Ankle Tendência Outono',
      ml: 'https://www.mercadolivre.com.br/bota-feminina-dakota-ankle-boot-salto-grosso-original/up/MLBU3860041216',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776353403/image_hvd1rk.png',
      badge: 'Coleção outono',
      badgeClass: 'bg-orange-500 text-white',
    },
    {
      name: 'Tênis Molekinho Calce Fácil Perfeito Para Escola',
      ml: 'https://produto.mercadolivre.com.br/MLB-3938542538-tnis-infantil-menino-calce-facil-escola-conforto-original-_JM',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776353967/image_s7fl3c.png',
      badge: 'Coleção infantil',
      badgeClass: 'bg-pink-500 text-white',
    },
    {
      name: 'Sandália Molekinha Linda Brilho Prata',
      ml: 'https://produto.mercadolivre.com.br/MLB-6025624300-sandalia-infantil-menina-moderna-festa-confortavel-original-_JM',
      image: 'https://res.cloudinary.com/dnvnxio4s/image/upload/v1776354099/image_v3nc3h.png',
      badge: 'Coleção infantil',
      badgeClass: 'bg-pink-500 text-white',
    },
  ];

  // Checagens simples para evitar regressões no dataset.
  if (typeof window !== 'undefined') {
    console.assert(products.length === 10, 'A vitrine deve conter 10 produtos.');
    console.assert(products.every((product) => !!product.name && !!product.ml && !!product.image), 'Todos os produtos precisam ter nome, link e imagem.');
    console.assert(products.every((product) => !!product.badge && !!product.badgeClass), 'Todos os produtos precisam ter selo e estilo do selo.');
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-700">
                Digos Online • Loja oficial no Mercado Livre
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-red-900 md:text-6xl">
                Encontre o calçado ideal para você nas nossas lojas oficiais!
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-neutral-600 md:text-xl">
                Confira os modelos mais desejados da Digos Online e escolha o que mais combina com você.
              </p>

              <div className="mt-8">
                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl bg-red-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Comprar agora!
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-neutral-200 p-3 shadow-sm sm:row-span-2">
                <div className="h-full min-h-[320px] overflow-hidden rounded-[1.5rem] bg-white">
                  <img
                    src="https://res.cloudinary.com/dnvnxio4s/image/upload/v1776350852/New_balance_530_izuyne.png"
                    alt="Tênis New Balance 530 Feminino"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] bg-neutral-200 p-3 shadow-sm">
                <div className="h-[152px] overflow-hidden rounded-[1.5rem] bg-white">
                  <img
                    src="https://res.cloudinary.com/dnvnxio4s/image/upload/v1776350820/Gemini_Generated_Image_dja9svdja9svdja9_w5t0bt.png"
                    alt="Lifestyle do produto"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] bg-neutral-200 p-3 shadow-sm">
                <div className="h-[152px] overflow-hidden rounded-[1.5rem] bg-white">
                  <img
                    src="https://res.cloudinary.com/dnvnxio4s/image/upload/v1776350953/Gemini_Generated_Image_st89f7st89f7st89_dypijb.png"
                    alt="Close do produto"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">Por que comprar com a Digos Online?</h2>
          <p className="mt-4 text-white/80">
            Uma página pensada para aquecer o cliente vindo do Instagram e facilitar a decisão de compra.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-7 text-left text-neutral-900 shadow-sm">
              <h3 className="text-xl font-semibold">Conforto no dia a dia</h3>
              <p className="mt-3 text-neutral-600">
                Modelos pensados para unir estilo, leveza e praticidade em diferentes ocasiões.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-7 text-left text-neutral-900 shadow-sm">
              <h3 className="text-xl font-semibold">Compra com confiança</h3>
              <p className="mt-3 text-neutral-600">
                Direcionamento para a loja oficial, transmitindo mais segurança ao consumidor.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-7 text-left text-neutral-900 shadow-sm">
              <h3 className="text-xl font-semibold">Seleção estratégica</h3>
              <p className="mt-3 text-neutral-600">
                Produtos mais buscados, organizados para facilitar a descoberta e aumentar o desejo de compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Mais procurados da Digos Online</h2>
            <p className="mt-3 text-neutral-600">Seleção dos 10 produtos com maior procura</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-2">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-neutral-900">{item.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">Confira na loja oficial da Digos Online.</p>

                <div className="mt-4 flex justify-center">
                  <a
                    href={item.ml}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto block w-full max-w-[180px] rounded-lg bg-red-900 px-3 py-2 text-center text-xs font-semibold text-white"
                  >
                    Comprar agora!
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-10">
          <div className="rounded-[2rem] bg-neutral-100 p-8 text-neutral-900 shadow-sm">
            <h2 className="text-3xl font-bold">Quem é a Digos Online?</h2>
            <p className="mt-6 text-neutral-700">
              A Digos Online oferece qualidade de atendimento, com as melhores marcas e produtos selecionados para você. Nosso foco é proporcionar uma experiência de compra prática, segura e com muito estilo.
            </p>
          </div>

          <div className="rounded-[2rem] bg-red-900 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold text-white">Gostou? Compre agora o seu modelo!</h2>
            <p className="mt-4 text-white/80">
              Veja todos os nossos produtos disponíveis em nossa loja oficial e finalize sua compra com uma condição especial!
            </p>

            <div className="mt-8">
              <a
                href={storeUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-white px-6 py-4 text-center font-semibold text-red-900"
              >
                Comprar agora!
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-sm text-gray-500">
        Digos Online
      </footer>
    </div>
  );
}
