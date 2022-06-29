import { useState, useEffect } from 'react';
import { calculateAndSetOptionsContainerPosition } from './drop-down-utils';
import styles from './CustomDropDown.module.scss';
import {CaretDownMinor} from '@shopify/polaris-icons';


function CustomDropDown({btnContent,optionsArray,onChange}) {

    const [isActive,setIsActive] = useState(false);

    useEffect(() => {
        calculateAndSetOptionsContainerPosition(styles);        
    });

    const handleBtnClick = () => {
        setIsActive(!isActive);
    }

    const handleChange = (e) => {
        const {label,value} = e.target.dataset;
        onChange({label,value});
    }

    const handleBlur = (e) => {
        if(!e.currentTarget.contains(e.relatedTarget)) {
            setIsActive(false);
        }
    }


    return (
        <div 
            className={`${styles["custom-drop-down-container"]} ${isActive?styles.active:''}`}
            tabIndex="0"
            onBlur={handleBlur}
        > 
            <button className={styles.btnContent} onClick={handleBtnClick}>
                <span>{btnContent}</span>
                <span className="caret-span">
                    <CaretDownMinor className={styles["caret-icon-syles"]}/>
                </span>
            </button>
            <div className={styles["options-container"]}>
                <ul onClick={handleChange}>
                    {
                        optionsArray.map((optionObject,i) => {
                            return (
                                <li 
                                    key={i}
                                    data-label={optionObject.label} 
                                    data-value={optionObject.value}
                                >
                                    {optionObject.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default CustomDropDown;