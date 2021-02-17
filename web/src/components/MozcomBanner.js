import React from 'react';
import clientConfig from "../../client-config";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

const MozcomBanner = props => {
    const { text, image } = props;

    const maybeImage = illustration => {
        let img = null;
        if (illustration && illustration.asset) {
            const fluidProps = getFluidGatsbyImage(
                illustration.asset._id,
                { maxWidth: 960 },
                clientConfig.sanity
            );

            img = (
                <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.alt} />
            );
        }
        return img;
    };

    const img = maybeImage(image);
    return <section className="bg-white border-b">
        <table>
            <tr>
                <td xs='12' md='6'>
                    <div>{img}</div>
                </td>
                <td xs='12' md='6'>
                    <span className='text-black'>{text}</span>
                </td>
            </tr>
        </table>
    </section>
};

export default MozcomBanner;