

import Header from "@/components/Header/Header";
import Index from "./components/Details";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    try {
      setIsDownloading(true);
      const content = document.getElementById("pdf-content");

      if (!content) {
        throw new Error("Content element not found");
      }

      // Create a wrapper with white background
      const wrapper = document.createElement("div");
      wrapper.style.backgroundColor = "#000";
      wrapper.style.color = "#fff";
      wrapper.style.position = "absolute";
      wrapper.style.left = "-9999px";
      wrapper.style.padding = "20px";

      // Inject a style element to adjust SVG/icon alignment and fix image stretching
      const style = document.createElement("style");
      style.innerHTML = `
      svg, .lucide {
        vertical-align: middle !important;
        display: inline-block !important;
      }

      #pdf-header {
        flex-direction: row !important;
      }

      .animate-pulse{
        vertical-align: middle !important;
        display: inline-block !important;
        position: relative;
        top: 6px; /* Adjust this value as needed */
      }
      
      /* Nudge icons downward by 2px.
         Adjust the value if necessary. */
      svg {
        position: relative;
        top:1px;
      }

      /* Preserve exact UI dimensions for PDF generation */
      img {
        object-fit: cover !important;
        object-position: center !important;
        display: block !important;
        /* Maintain original width and height from UI */
        width: inherit !important;
        height: inherit !important;
      }

      /* Ensure containers maintain proper dimensions */
      .relative {
        overflow: hidden !important;
      }
      
      /* Preserve specific image dimensions */
      .w-52 { width: 13rem !important; }
      .h-60 { height: 15rem !important; }
      .w-72 { width: 18rem !important; }
      .h-72 { height: 18rem !important; }
      `;
      wrapper.appendChild(style);

      // Clone the content
      const clonedContent = content.cloneNode(true);
      wrapper.appendChild(clonedContent);
      document.body.appendChild(wrapper);

      // Wait a moment for styles to apply
      await new Promise(resolve => setTimeout(resolve, 100));

      // Enhanced html2canvas configuration
      const canvas = await html2canvas(wrapper, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#202020",
        logging: false,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: wrapper.scrollWidth,
        windowHeight: wrapper.scrollHeight,
        x: 0,
        y: 0,
        onclone: (clonedDoc) => {
          // Preserve exact UI dimensions for images
          const clonedImages = clonedDoc.querySelectorAll('img');
          clonedImages.forEach(img => {
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center';
            img.style.display = 'block';
            // Keep original dimensions from the UI
            const computedStyle = window.getComputedStyle(img);
            img.style.width = computedStyle.width;
            img.style.height = computedStyle.height;
          });
        }
      });

      // Clean up
      document.body.removeChild(wrapper);

      // PDF Generation preserving UI layout
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Scale to fit the page while preserving the exact UI proportions
      const canvasAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;

      let imgWidth, imgHeight, xOffset = 0, yOffset = 0;

      if (canvasAspectRatio > pdfAspectRatio) {
        // Canvas is wider - fit to width
        imgWidth = pdfWidth;
        imgHeight = pdfWidth / canvasAspectRatio;
        yOffset = (pdfHeight - imgHeight) / 2;
      } else {
        // Canvas is taller - fit to height
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * canvasAspectRatio;
        xOffset = (pdfWidth - imgWidth) / 2;
      }

      pdf.addImage(imgData, "JPEG", xOffset, yOffset, imgWidth, imgHeight, "", "FAST");

      const filename = `biodata_tirath.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="border w-full mx-auto bg-[#202020] text-white rounded-2xl sm:p-4">
      <div id="pdf-content" className="min-h-screen max-w-4xl mx-auto">
        <Header />
        <Index />
      </div>
      <div className="text-center mt-8 flex justify-center mb-6">
        <button
          className={`border border-blue-700 rounded-2xl p-2 bg-blue-700 flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors ${
            isDownloading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={downloadPDF}
          disabled={isDownloading}
        >
          <span className="flex items-center gap-2">
            {isDownloading ? "Generating PDF..." : "Download BioData"}
            <Download className={isDownloading ? "animate-pulse" : ""} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default App; 

