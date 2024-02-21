import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Avatar } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material'; // Import the Download icon
import pdfData from '../SubPackages/PdfData';
import AsifReza from '../Images/TeamMembars/AsifReza.jpg'

const PdfListPage = () => {
  const handleDownload = (pdfName, pdfFilePath) => {
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = `${pdfName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="BackGroundThame">
      <Grid container spacing={2}> {/* Add spacing between grid items */}
        <Grid item xs={12} md={6} > {/* Set xs to 12 for small devices */}
          {pdfData.map((pdf) => (
            <Card key={pdf.id} style={{ margin: 10, minWidth: 200, backgroundColor: '#d1faff' }}>
              <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography component="div" variant='h6'  className='highlightText'>
                  {pdf.name}
                </Typography>
                <Typography color="text.secondary" style={{padding:'0.8rem'}}>{pdf.description.slice(0,25)+"..."}</Typography>
                <IconButton onClick={() => handleDownload(pdf.name, pdf.file)} style={{ color: '#00264d',border:" 0.3rem solid green", borderRadius:"15% 5% 20% 40%",background:'#aef3aa'}}>
                  <DownloadIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4} marginLeft={4}>
        

          <h4><Avatar alt={"ASIF"} src={AsifReza} style={{height:"100%",width:'5rem'}} />The content on this page is protected by copyright law, including the provisions of the  <strong>Copyright Act, 1957, of India</strong></h4>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default PdfListPage;
