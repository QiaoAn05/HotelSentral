const DATAS = [
    {image: "media/kl.jpg", title: "Hotel Sentral Kuala Lumpur", address:"30, Jalan Thambypillai, Brickfields 50470, Kuala Lumpur, Malaysia", slug:"https://www.booking.com/hotel/my/sentral-kuala-lumpur.en-gb.html"},
    {image: "media/pudu.jpg", title: "Hotel Sentral Pudu", address:"310, Jalan Pudu 55100, Kuala Lumpur, Malaysia", slug:"https://www.booking.com/hotel/my/sentral-pudu-kuala-lumpur.en-gb.html"},
    {image: "media/kuantan.jpg", title: "Hotel Sentral Kuantan", address:"45-P, Jalan Besar 25000, Kuantan, Pahang", slug:"https://www.booking.com/hotel/my/sentral-kuantan.en-gb.html"},
    {image: "media/johor.jpg", title: "Hotel Sentral Johor Bahru", address:"17, Jalan Tenteram, Tanjung Puteri 80300, Johor Baharu", slug:"https://www.booking.com/hotel/my/sentral-johor-bahru.en-gb.html"},
    {image: "media/georgetown.jpg", title: "Hotel Sentral Georgetown", address:"12, Lorong Kinta 10400, Georgetown, Penang", slug:"https://www.booking.com/hotel/my/sentral-georgetown.en-gb.html"},
    {image: "media/seaview.jpg", title: "Hotel Sentral Seaview", address:"555, Jalan CM Hashim Tanjung Tokong 11200, Pulau Pinang", slug:"https://www.booking.com/hotel/my/sentral-seaview-penang.en-gb.html"},
    {image: "media/melaka.jpg", title: "Hotel Sentral Melaka", address:"20, Jalan Tun Sri Lanang 75100, Melaka", slug:"https://www.booking.com/hotel/my/sentral-melaka.en-gb.html"},
    {image: "media/riverview.jpg", title: "Hotel Sentral Riverview", address:"177, Jalan Tun Ali 73500, Melaka", slug:"https://www.booking.com/hotel/my/sentral-riverview-melaka.en-gb.html"},
    {image: "media/maison.jpg", title: "Maison Boutique Theme", address:"36, Jalan Baba, Pudu 55100, Kuala Lumpur, Malaysia", slug:"https://www.booking.com/hotel/my/maison-boutique-theme-hotel.en-gb.html"},
    {image: "media/bali.jpg", title: "Tok Man Bali Beach Resort", address:"Lot 6264(1), Pantai Bisikan Bay, Semerak 16700, Pasir Puteh, Kelantan", slug:"https://www.booking.com/hotel/my/tok-aman-bali.en-gb.html"}
];

function Card ({data}) {
    return <div className="rounded overflow-hidden rounded-lg flex flex-col">
    <img src={data.image} alt={data.title}/>
    <h2 className="card-title my-3">{data.title}</h2>
    <p className="text mb-5">{data.address}</p>
    <a target="_blank" href={data.slug}
      className="book-button bg-red mt-5 mt-auto w-fit rounded-md px-5 py-2 font-bold tracking-wide text-white">
      Book now
      <span className="pl-5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" class="svg-inline--fa fa-right-long text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 88L32 208c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l288 0 0 88c0 9.6 5.7 18.2 14.5 22z"></path>
        </svg>
      </span>
    </a>
  </div>
}

function CardsContainer ({datas}) {
    const rows= []
    let lastCard = null

    datas.forEach(data => {
        rows.push(<Card key={data.title} data={data}/>)
    })
}

class Main extends React.component {

    render () {
        return <React.Fragment>
             <main class="container max-w-[85%] md:max-w-[90%] p-5 mx-auto">
             <h1 class="title text-3xl mb-10">Book a hotel today</h1>
             <div class="mx-auto grid gap-y-10 md:grid-cols-3 md:gap-12 md:gap-y-14 lg:grid-cols-4">

             </div>
             </main>
        </React.Fragment>
    }
}


ReactDOM.render(<Main datas={DATAS}/>, document.getElementById('app'))