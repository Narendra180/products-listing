import { Modal } from "@shopify/polaris";
import styles from "./ProductDescriptionModal.module.scss";

function ProductDescriptionModal({onClose,data,open}) {

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={data?data.title:""}
        >
            {
                data
                    ?       
                        <div
                            className={styles['product-description-modal-container']}
                        >
                            <div className="image-container">
                                <img src={data.image} alt={data.title}/>
                            </div>
                            <div className="description-container">
                                <h2>A Description:</h2>
                                <p>{data['description']}</p>
                            </div>
                            <div className="rating-container">
                                <h2>Rating:</h2>
                                <dl>
                                    <div>
                                        <dt>Rating:</dt>
                                        <dd>{data["rating_rate"]}</dd>
                                    </div>
                                    <div>
                                        <dt>Rated By:</dt>
                                        <dd>{data["rating_count"]} Customers</dd>
                                    </div>                                    
                                </dl>
                            </div>
                        </div>
                    :
                    ""
            }
        </Modal>
    )
}

export default ProductDescriptionModal;