import React, { ChangeEvent, useEffect, useState } from 'react';
import '../styles/MemeCard.css';
import DoHard from './DoHard';
import axiosInstance from '../Hooks/instance';
import axios from 'axios';
import { Buffer } from 'buffer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/reactToastify.css';

function MemeCard() {
    // State management of all states
    const [buffer, setBuffer] = useState<any>([]);
    const [posts, setPosts] = useState<any>([]);
    const [imageFile, setImageFile] = useState<any>();
    const [current, setCurrent] = useState(0);
    const [caption, setCaption] = useState('');
    const [quote, setQuote] = useState<any>({
        quote: " ",
    });
    

    // Receives the inputted image file from the input's tag
    const imageInput = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const files  =( target.files as FileList)[0];
        console.log("nd", files)
        handleImages(files)
    }

    // Receives the inputted caption from the textarea
    const captionInput = (event: { preventDefault: () => void; target: { value: any; }; }) =>
    {
        event.preventDefault();
        setCaption(event.target.value);
    }

    // Validate image files format before upload
    const imageMineType = /image\/(png|jpg|jpeg|gif)/gm;
    const handleImages = (file: any) => {
        if ([imageMineType].includes(file.type))
            return file;
        showImage(file)
        setImageFile(file)
    };

    // Handles the preview image, for users to see before upload
    const imagePreview = document.querySelector(".previewHolder");
    const showImage = (image: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', (event) => {
            const div = document.createElement('div');
            div.classList.add('imagePreview');
            div.id = "preImg"
            div.innerHTML = `
                <button className="p" id="close">Close </button>
                <img src="${event.target?.result}" alt="${image.name}" />
                <p>name : ${image.name}</p>
                <p>size : ${formatBytes(image.size)}
            `;
            imagePreview?.append(div);
            const close = document.getElementById('close');
            close?.addEventListener('click', function clear (){
                div.remove();
            });
            const btn = document.getElementById('uploadBtn');
            btn?.addEventListener('click',  function unmount() {
                div.remove()
            });
        });
    };

    // Calculate and display the size of the image under the preview image
    function formatBytes(size: number, decimals = 2) {
        if (size === 0) return '0 bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    }

    // Handles MEMES image and caption upload to the server (POST request)
    const uploadImages = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('file', imageFile, imageFile.originalname)
        formData.append('caption', caption);
        const response = await axios.post("memes/new", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response;
    };

    // Clears the MEMES textarea and select file input after upload//
    const captionText = document.getElementById('caption') as HTMLInputElement | null;
    const fileImage = document.getElementById('file') as HTMLInputElement | null;
    const uploadPost = document.getElementById('uploadBtn')
    uploadPost?.addEventListener('click', function clear(){
        if (fileImage != null)
            fileImage.value = '';
        if (captionText != null)
            captionText.value = '';
    })
    

    // handles the input of new text in the motivational quotes textarea
    const handleChange = (event: { preventDefault: () => void; target: { value: any } }) => {
        event.preventDefault();
        setQuote({
            quote: event.target.value,
        });
    };

    // Clearing the Motivational quote textarea after uploading quote
    const textarea = document.getElementById('quote') as HTMLInputElement | null;
    const btn = document.getElementById('btn')
    btn?.addEventListener('click', function clear(){
        if (textarea != null)
            textarea.value = ''
    })

    // Handles the post request of motivational quotes
    const submitForm = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        axiosInstance({
            method: "POST",
            url: "motivation/add",
            data: quote
        })
        .then((data) => {
            console.log("new quote", data)
        })
    }

    // Fetch the image buffer stored in the database
    // convert the buffer to base64
    // pass the base64 string to the app and render it as image
    const imageData: any = [];
    const imageType: any = [];
    useEffect(() => {
        axiosInstance({
            method: "GET",
            url: "trailblazer/all"
        })
        .then((data) => {
            setBuffer(data)
        })
    }, [])
    buffer.forEach((element: { data: any, type: string }) => {
        const imageString =  Buffer.from(element.data.data, "base64")
        const image = imageString.toString('base64')
        imageData.push(image)
        imageType.push(element.type)
    });

    // MEME data structure or class instance that will receive the responds to the GET request
    // and render it 
    class meme {
        caption: string;
        name: string;
        type: string;
        imgStr: string;
        constructor( caption: string, name: string, type: string, imgStr: string) {
            this.caption = caption;
            this.name = name;
            this.type = type;
            this.imgStr = imgStr;
        }
    }

    // sends GET request to server for the memes post
    // receives responds, convert image buffer to Base64
    // creates a new instance of the meme data's structure for each post(image and caption)
    // with caption, image name, type and base64 strings as arguments
    const memePosts: any = [];
    useEffect(() => {
        axiosInstance({
            method: 'GET',
            url: "memes/all"
        })
        .then((data) => {
            setPosts(data)
        })
    },[])
    posts.forEach((post: any) => {
        const mediaBuffer = post.data.data;
        const mediaBlob = Buffer.from(mediaBuffer, "base64");
        const mediaString = mediaBlob.toString('base64');
        memePosts.push(new meme( post.caption, post.name, post.type, mediaString ))
    });

    // Memes Image slide effect 
    const length = memePosts.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    if (!Array.isArray(memePosts) || memePosts.length <= 0) {
        return null;
    }

    setTimeout(nextSlide, 10000)

    return (
        <div className='memeCard'>
            <div className='memeCard__width'>
                <div className='memeCard__content'>
                    <div className='memeAdd'>
                        <div className='memeCard__card'>
                            <div className='memeCard__cardHeader'>
                                <div className='memeCard__cardHeaderTitle'>
                                    <h3>MEME</h3>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 40" fill="none">
                                    <rect x="18.75" width="12.5" height="60" fill="#83F6FD"/>
                                    <rect x="37.5" width="12.5" height="60" fill="#F48484"/>
                                    <rect width="12.5" height="60" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            {/** Renders MEME posts with slide effect  */}
                            {memePosts.map((post: any, idx: number) => (
                                <>
                                    <div className={idx === current ? 'memeCard__cardImg': "slideHide"}>
                                        <img  key={idx} src={`data:${post.type};base64,${post.imgStr}`} alt={post.name} />
                                    </div>
                                    <div key={idx} className={ idx === current ? 'memeCard__cardDesc' : 'slideHide'}>
                                        <p className={ idx === current ? "slideView" : 'slideHide'} key={idx}>
                                            {post.caption}
                                        </p>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/**Handles the form to add memes */}
                        <form
                            onSubmit={uploadImages}
                            className='addMeme'>
                            <input 
                                type="file" 
                                id='file'
                                className='files' 
                                onChange={imageInput} 
                                name='file' />
                            <div className='addMeme__desc'>
                                <textarea 
                                    onChange={captionInput}
                                    id='caption'
                                    name='caption' 
                                    className='memeCard__caption' rows={2} 
                                    cols={38} placeholder='Caption ...' >
                                </textarea>
                            </div>
                            <input className='memeCard__addBtn' id='uploadBtn'  type="submit" value="add meme" />
                        </form>
                        {/**Holds the preview image before upload */}
                        <div className='image_preview'></div>
                    </div>
                    <div className='previewHolder'></div>
                    <div className='memeCard__down'>
                        <div className='memeCard__emailCard'>
                            <div className='memeCard__emailCardHeader'>
                                <div className='memeCard__emailCardTitle'>
                                    <h3>INSPIRATIONS</h3>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 40" fill="none">
                                    <rect x="18.75" width="12.5" height="60" fill="#83F6FD"/>
                                    <rect x="37.5" width="12.5" height="60" fill="#F48484"/>
                                    <rect width="12.5" height="60" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            {/**Renders the trailblazer image */}
                            <div className='memeCard__emailCardImg'>
                                <img   
                                    src={ `data:${imageType};base64,${imageData}` } 
                                    alt="trailblazers of the week" />
                            </div>
                        </div>
                        {/**Handles the form to add motivational quotes */}
                        <form className='addMotivational' id='addQuote' onSubmit={submitForm}>
                            <textarea 
                                id='quote' 
                                name="quote"  
                                className='memeCard__textArea' 
                                rows={4} cols={30} 
                                placeholder="What's your favorite motivational quote" 
                                onChange={handleChange}
                            ></textarea>
                            <div className='addBtn'>
                                <button type='submit' id='btn' className='memeCard__addBtn' >add favorite quote</button>
                            </div>
                        </form>
                    </div>
                    <div className='footer'>
                        <div className='footer__logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="147" viewBox="0 0 182 147" fill="none">
                                <rect width="182" height="147" fill="#121C19"/>
                                <rect x="73" y="22.3309" width="16" height="55" fill="#83F6FD"/>
                                <rect x="97" y="22.3309" width="16" height="55" fill="#F48484"/>
                                <path d="M124.632 20.5121L140.632 20.512L108.632 77.512L91.6321 77.512L124.632 20.5121Z" fill="#F48484"/>
                                <path d="M73.6321 20.2833L87.6321 20.2833L56.6321 77.5118L41.6321 77.5118L73.6321 20.2833Z" fill="#9EF7B1"/>
                                <path d="M98.6321 20.5118L112.632 20.5118L81.6321 77.5118L66.0661 77.7404L98.6321 20.5118Z" fill="#83F6FD"/>
                                <rect x="49" y="22.3309" width="16" height="55" fill="#9EF7B1"/>
                                <path d="M155 18.4621L157.673 25.8083L157.793 26.1373H158.143H166.625L159.814 30.556L159.48 30.7725L159.616 31.1464L162.249 38.3807L155.272 33.8551L155 33.6786L154.728 33.8551L147.751 38.3807L150.384 31.1464L150.52 30.7725L150.186 30.556L143.375 26.1373H151.857H152.207L152.327 25.8083L155 18.4621Z" fill="white" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='footer__hard'>
                            <DoHard />
                            <div className='header__logo'>
                            
                                <div className='leftColor__bar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 50 40" fill="none">
                                        <rect x="18.75"  width="12.5" height="19" fill="#83F6FD"/>
                                        <rect x="37.5" width="12.5" height="10" fill="#F48484"/>
                                        <rect width="12.5" height="40" fill="#9EF7B1"/>
                                    </svg>
                                </div>
                                <h1>ALX-SASA</h1>
                            </div>
                        </div>
                        <div className='footer__words'>
                            <h5>Privacy policy</h5>
                            <h5>&copy;2023 All Rights Reserved ALX-SASA</h5>
                        </div>
                    </div>
                    <div className='footer__stars'>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#fff">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#f8cf5b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#f8cf5b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#fff">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemeCard
