import styled from 'styled-components'

function Footer(){

    const Tagline = styled.div`
        background-color: brown;
        padding: 50px;
    `

    const TextTagline = styled.p`
        color: wheat;
        font-size: 0.8rem;
    `

    return(
        <>
           <Tagline>
                <TextTagline>Copyright By PeTIK Jombang</TextTagline>
           </Tagline> 
        </>
    )
}

export default Footer