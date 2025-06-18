function Banner ({bannerImg,bannertitle1,bannertitle2,titleDisplay,imgScale}) {
    return(

       <section className={`banner`}>
        <h1 className={`banner_title`} style={{ "display": `${titleDisplay}` }}><span>{bannertitle1}</span><span>{bannertitle2}</span></h1>
        <img className={`banner_img`} src={bannerImg} alt="image d'un paysage" style={{"transform": `scale(${imgScale})`}}></img>
        </section> 
        
    )
}

export default Banner