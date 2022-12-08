import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../../../assets/campaign/file.pdf'
import './Resume.css'

const index = () => {
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <div className="resume_main">
                <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div>
                    <div className="pagec">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>

                </div>
            </div>
            <div className="buttonc">
                <button className='download_resume' onClick={onButtonClick}><i className="fa-solid fa-download"></i> Resume</button>
            </div>
        </>
    )
}

export default index
