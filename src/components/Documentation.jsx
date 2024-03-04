import React, { useRef } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Header from './Header';
import logoSmall from '../assets/logoSmall.png'

const Documentation = () => {

    //  ****  Element References for navigation auto-scrolling  ****
    const shuffleRef = useRef(null);
    const newBoxRef = useRef(null);
    const drawRef = useRef(null);
    const shuffleNewRef = useRef(null);

    const shuffleSet = () => {
        shuffleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const newBox = () => {
        newBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const drawDomino = () => {
        drawRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const shuffleNew = () => {
        shuffleNewRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header shuffleSet={shuffleSet} newBox={newBox} drawDomino={drawDomino} shuffleNew={shuffleNew} />
            <img src={logoSmall} className='h-[100%] object-contain w-[90%] left-4 absolute top-96 opacity-5' />
            <div className='flex flex-col w-[100%] '>

                <div ref={newBoxRef} className='flex flex-col mt-20 relative'>
                    <h1 className='text-slate-100 font-semibold self-center text-center font-sans mb-2 text-lg sm:text-xl lg:text-2xl '>Get a fresh <em>NEW BOX</em> of Dominoes:</h1>
                    <div className=' border-t border-b border-blue-400 py-2 pl-10 sm:pl-0 flex flex-col overflow-x-auto'>
                        <h1 className='text-slate-100 font-semibold h-7 font-sans self-center text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-green-900 flex flex-col justify-center items-center px-4 mx-4 '>GET</div>
                            https://www.boxofdominoes.com/api/v1/newbox
                        </h1>
                    </div>

                    <ul className='list-disc px-4 lg:px-16 mt-4 self-center xl:max-w-[85%]'>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            A new box of dominoes comes with all dominoes in the same order everytime, just like getting a newly printed box of dominoes right off the factory line!
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Make a simple HTTP GET Request to the above url and it will return a JSON object titled "newBox".
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Opening a new box will return to you a new dominoes set and set "_id".  Your set of dominoes and the set "_id" will be used for further calls to the API.
                        </li>
                    </ul>

                    <div className='  flex flex-col justify-center items-center z-10 my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md  mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:max-w-[60%]'>
                            <CodeBlock
                                text={`
{
    "newBox": {
        "_id": "65e29b46cf56bb408d4c1e2c",
        "remaining": 28,
        "shuffled": false,
        "dominoes": [
            {
                "index": 27,
                "sideA": 6,
                "sideB": 6,
                "isDouble": true,
                "edgeL": 12,
                "edgeR": 12,
                "isHorizontal": false,
                "openSideA": false,
                "openSideB": false,
                "openEdgeA": true,
                "openEdgeB": true,
                "totalValue": 12,
                "isFaceUp": true,
                "next": null,
                "image": "https://boxofdominoes.com/images/dom6.6.png",
                "imageBack": "https://boxofdominoes.com/images/domBack.png"
            },
            {
                "index": 26,
                "sideA": 5,
                "sideB": 6,
                "isDouble": false,
                "edgeL": null,
                "edgeR": null,
                "isHorizontal": false,
                "openSideA": true,
                "openSideB": true,
                "openEdgeA": false,
                "openEdgeB": false,
                "totalValue": 11,
                "isFaceUp": true,
                "next": null,
                "image": "https://boxofdominoes.com/images/dom5.6.png",
                "imageBack": "https://boxofdominoes.com/images/domBack.png"
            },
            ...
            ...
            ...
            ...
            `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                </div>


                <div ref={shuffleNewRef} className='flex flex-col w-[100%] relative'>
                    <h1 className='text-slate-100 font-semibold self-center text-center font-sans mt-20 mb-2 text-lg sm:text-xl lg:text-2xl '>Get a <em>NEW SHUFFLED SET</em> of Dominoes:</h1>
                    <div className=' border-t border-b border-blue-400 py-2 pl-10 sm:pl-0 flex flex-col overflow-x-auto'>
                        <h1 className='text-slate-100 font-semibold h-7 self-center font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-green-900 flex flex-col justify-center items-center px-4 text-slate-100 mx-4'>GET</div>
                            https://www.boxofdominoes.com/api/v1/newset
                        </h1>
                    </div>

                    <ul className='list-disc px-4 mt-4 self-center xl:max-w-[85%]'>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Make a simple HTTP GET Request to the above url and it will return a JSON object titled "newSet".
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Returns a shuffled set of dominoes with a new dominoes set "_id" that will be used for further calls to the API.
                        </li>
                    </ul>

                    <div className='  flex flex-col justify-center items-center z-10 my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:max-w-[60%]'>
                            <CodeBlock
                                text={`
{
    "newSet": {
        "_id": "65e2b367cf56bb408d4c1e2f",
        "remaining": 28,
        "shuffled": true,
        "dominoes": [
            {
                "index": 2,
                "sideA": 0,
                "sideB": 2,
                "isDouble": false,
                "edgeL": null,
                "edgeR": null,
                "isHorizontal": false,
                "openSideA": true,
                "openSideB": true,
                "openEdgeA": false,
                "openEdgeB": false,
                "totalValue": 2,
                "isFaceUp": false,
                "next": null,
                "image": "https://boxofdominoes.com/images/dom0.2.png",
                "imageBack": "https://boxofdominoes.com/images/domBack.png"
            },
            {
            "index": 17,
            "sideA": 2,
            "sideB": 6,
            "isDouble": false,
            "edgeL": null,
            "edgeR": null,
            "isHorizontal": false,
            "openSideA": true,
            "openSideB": true,
            "openEdgeA": false,
            "openEdgeB": false,
            "totalValue": 8,
            "isFaceUp": false,
            "next": null,
            "image": "https://boxofdominoes.com/images/dom2.6.png",
            "imageBack": "https://boxofdominoes.com/images/domBack.png"
        },
        ...
        ...
        ...
        ...
        `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                </div>

                <div ref={shuffleRef} className='flex flex-col w-[100%] relative'>

                    <h1 className='text-slate-100 font-semibold self-center text-center font-sans mt-20 mb-2 text-lg sm:text-xl lg:text-2xl '>Shuffle an <em>EXISTING SET</em> of Dominoes:</h1>
                    <div className=' border-t border-b border-blue-400 py-2 pl-20 sm:pl-0 flex flex-col overflow-x-auto'>
                        <h1 className='text-slate-100 h-7 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-yellow-600 flex flex-col justify-center items-center px-4 mx-4'>POST</div>
                            https://www.boxofdominoes.com/api/v1/shuffleSet/*your set "_id"*
                        </h1>
                    </div>

                    <ul className='list-disc px-4 lg:px-16 mt-4 self-center'>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Use your dominoes set id to shuffle and play with your dominoes!
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Make a simple HTTP POST Request to the above url, and pass your dominoe set "_id" into the url parameter.
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Returns a shuffled set of dominoes as a JSON object titled "newSet".
                        </li>
                    </ul>

                    <div className='  flex flex-col justify-center items-center z-10 my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:max-w-[60%]'>
                            <CodeBlock
                                text=
                                {`
{
    "newSet": {
        "_id": "65e2b367cf56bb408d4c1e2f",
        "remaining": 28,
        "shuffled": true,
        "dominoes": [...],
    }
}
`}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                </div>


                <div ref={drawRef} className='flex flex-col w-[100%] relative'>
                    <h1 className='text-slate-100 font-semibold font-sans self-center text-center mt-20 mb-2 text-lg sm:text-xl lg:text-2xl'> <em>DRAW ONE</em> or more Dominoes:</h1>
                    <div className=' border-t border-b border-blue-400 py-2 pl-10 sm:pl-0 flex flex-col overflow-x-auto'>
                        <h1 className='text-slate-100 self-center h-7 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-yellow-600 flex flex-col justify-center items-center px-4 mx-4 text-slate-100'>POST</div>
                            https://www.boxofdominoes.com/api/v1/draw/*your set _id*/*optional count*
                        </h1>
                    </div>

                    <ul className='list-disc px-4 md:px-16 mt-4 self-center'>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            Make a simple HTTP POST Request to the above url and pass your dominoes set id into the url parameters.
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            By default, it will draw one domino from your set of dominoes and return it as a JSON object.
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 mx-4 md:mx-14 xl:mx-32 2xl:mx-48'>
                            To draw more than one domino at a time, add the optional "COUNT" parameter and the dominoes will be returned in an array.
                        </li>
                    </ul>

                    <div className='  flex flex-col justify-center items-center z-10 my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md  mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:max-w-[60%]'>
                            <CodeBlock
                                text={`
{
    "dominoes": [
        {
            "index": 22,
            "sideA": 4,
            "sideB": 4,
            "isDouble": true,
            "edgeL": 8,
            "edgeR": 8,
            "isHorizontal": false,
            "openSideA": false,
            "openSideB": false,
            "openEdgeA": true,
            "openEdgeB": true,
            "totalValue": 8,
            "isFaceUp": false,
            "next": null,
            "image": "https://boxofdominoes.com/images/dom4.4.png",
            "imageBack": "https://boxofdominoes.com/images/domBack.png"
        }
    ],
    "remaining": 25,
    "response": { ** The remaining dominoes are returned also ** }
}
`}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                </div>
                <img src={logoSmall} className='h-[100%] object-cover right-10 absolute top-[1650px] opacity-5' />
            </div>
        </>
    );
};

export default Documentation;
