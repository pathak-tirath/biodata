
// import Header from '@/components/Header/Header'
// import Index from './components/Details'

// const App = () => {
//   return (
//     <div className='m-10 border w-9/12 mx-auto bg-[#202020] text-white rounded-2xl p-4'>
//       <Header />
//       <Index />
//     </div>
//   )
// }

// export default App

import Header from '@/components/Header/Header';
import Index from './components/Details';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';


const App = () => {
  const downloadPDF = () => {
    const content = document.getElementById('pdf-content');
    
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('profile.pdf');
    });
  };

  return (
    <div className='m-10 border w-9/12 mx-auto bg-[#202020] text-white rounded-2xl p-4'>
      <div id='pdf-content'>
        <Header />
        <Index />
      </div>
      <div className='text-center mt-4'>
        <Download onClick={downloadPDF}>Download PDF</Download>
      </div>
    </div>
  );
};

export default App;
