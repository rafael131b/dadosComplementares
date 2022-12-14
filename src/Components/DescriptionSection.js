export const DescriptionSection = ({title,text}) =>{

    return <div style={{marginTop:"100px"}}>
        <h4 className="description-section mt-5">{title}</h4>

        <p className="text-description-section mt-3 mb-2">{text}</p>
    </div>
    
}