

export default function ProductDetailsSection({title, paragraph, img, reversed = false}) {

    if (reversed === true)
    {
        return (
            <section className="product_details_section">

                <strong>{title}</strong>

                <div className="product_details_box">
                    <p className="product_details_paragraph">
                        {paragraph}
                    </p>
                    <div className="product_details_img_container">
                        <img src={img} alt={title}>
                        </img>
                    </div>
                </div>

            </section>
        );
    }
    else
        return (
            <section className="product_details_section">

                <strong>{title}</strong>

                <div className="product_details_box">
                    <div className="product_details_img_container">
                        <img src={img} alt={title}>
                        </img>
                    </div>
                    <p className="product_details_paragraph">
                        {paragraph}
                    </p>
                </div>

            </section>
        );
}