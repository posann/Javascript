function Hero(){
    const title = [
        'Nama Lengkap',
        'Asal',
        'Umur',
        'Status',
    ]

    const user = [
        'Muhammad Ariel',
        'Bogor',
        '31 Tahun',
        'Lajang'
    ]

    return (
        <>
            <div>
                <h5>{title[0]}</h5>
                <h3>{user[0]}</h3> <br />

                <h5>{title[1]}</h5>
                <h3>{user[1]}</h3> <br />

                <h5>{title[2]}</h5>
                <h3>{user[2]}</h3> <br />

                <h5>{title[3]}</h5>
                <h3>{user[3]}</h3> <br />
            </div>
        </>
    )
}

export default Hero