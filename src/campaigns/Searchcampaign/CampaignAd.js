import React from 'react'
import Content from '../../component/Content'
import coke_ad from '../../assets/coke_ad.png'
import del_popup from '../../assets/del_popup.png'
import archive_pop from '../../assets/Archive.svg'
import { useState } from 'react'
// MUI SEARCH BTN
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Mui Buttons
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//Mui Dialog Box
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const CampaignAd = () => {

  // Archive And Unarchive Button Toggle
  const [isarchive, setIsArchive] = useState(false)
  // Mui Dialog Box
  const [open, setOpen] = React.useState(false);
  const [archive, setArchive] = useState(false);
  const [unArchive, setUnArchive] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenarchive = () => {
    setArchive(true);
  }
  const handleClickOpenUnarchive = () => {
    setUnArchive(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUnArchive = () => {
    setUnArchive(false);

  }
  const handleCloseUnArchivedata =()=>{
    setUnArchive(false);
    setIsArchive(false);
  }
  const handleArchive = () => {
    setArchive(false);
  }
  const handleArchivedata = () => {
    setIsArchive(true)
    setArchive(false);
  }
  return (
    <>
      <Content />
      <div className='CampaignAd_camp_pr'>
        {/* ===Capaign-Ad Header and Search bar=== */}
        {/* Header Parent */}
        <div className='srch_camp_hdr'>
          {/*Header h1 */}
          <div className='hdr_hding'>
            <h1>Campaign</h1>
          </div>
          {/* Search Input */}
          <div className='srch_inpt'>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Brand Culture Strategy"
                inputProps={{ 'aria-label': 'Search Brand Culture Strategy' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </div>
        </div>

        {/* ===Campaigns Ad Buttons=== */}
        <div className='srchd_btns'>
          <div className='campaignAd_ad_srchd'>
            <Stack spacing={2} direction="row" >
              <Button variant="outlined" className='campaignAd_edt_btn' >Edit ad</Button>
            </Stack>
          </div>
          <div className='campaignAd_ad_srchd'>
            <Stack spacing={2} direction="row" >
              <Button variant="outlined" className='campaignAd_edt_btn_dlt_btn' onClick={handleClickOpen}>Delete ad</Button>
              {/* ----------------Dialog Box---------------- */}
              <div className='del_pop_up'>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <div className='_popup_del_image'>
                    <img src={del_popup} alt="" className='pop_ad_del_img' />
                    <h4>Are you Sure?</h4>
                  </div>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='add_del_content'>
                      <p>You are deleting an Ad with title Of</p>
                      <p className='del_title'>"Open A Coke,Open Happiness In coca-cola"</p>
                    </DialogContentText>
                  </DialogContent>
                  <div className='dlr_popup_cntnueto_dlt'>
                    <p>
                      All data will be deleted and can not be undone.Do you still want to Comntinue?
                    </p>
                  </div>
                  <div className='_dlt_pop_btns'>
                    <Button onClick={handleClose} className="del_pop_continue">Continue</Button>
                    <Button onClick={handleClose} autoFocus className="del_pop_cancel">Cancel</Button>
                  </div>
                </Dialog>
              </div>
              {/* ------------------------------------------- */}
            </Stack>
          </div>
          <div className='campaignAd_ad_srchd'>
            <Stack spacing={2} direction="row">
              {
                isarchive ?
                  <>
                    <Button variant="outlined" className='campaignAd_edt_btn_archv_btn' 
                    onClick={handleClickOpenUnarchive}>Unarchive ad</Button>
                    <Dialog
                      open={unArchive}
                      onClose={handleCloseUnArchive}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <div className='_popup_del_image'>
                        <img src={del_popup} alt=""             className='pop_ad_del_img' />
                        <h4>Are you Sure?</h4>
                      </div>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description" className='add_del_content'>
                          <p>You are Unarchive an Ad with title Of</p>
                          <p className='del_title'>"Open A Coke,Open Happiness In coca-cola"</p>
                        </DialogContentText>
                      </DialogContent>
                      <div className='_dlt_pop_btns'>
                        <Button onClick={handleCloseUnArchivedata} className="Archive_pop_continue">Unarchive ad</Button>
                        <Button onClick={handleCloseUnArchive} autoFocus className="del_pop_cancel">Cancel</Button>
                      </div>
                    </Dialog>
                  </>
                  :
                  <Button variant="outlined" className='campaignAd_edt_btn_archv_btn'
                    onClick={handleClickOpenarchive}>Archive ad</Button>
              }
              
              <div className='del_pop_up'>
                <Dialog
                  open={archive}
                  onClose={handleArchive}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <div className='_popup_del_image'>
                    <img src={archive_pop} alt="" className='pop_ad_arch_img' />
                    <h4>Are you Sure?</h4>
                  </div>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='add_del_content'>
                      <p>You are deleting an Ad with title Of</p>
                      <p className='del_title'>"Open A Coke,Open Happiness In coca-cola"</p>
                    </DialogContentText>

                  </DialogContent>

                  <div className='_dlt_pop_btns'>
                    <Button onClick={handleArchivedata} className="Archive_pop_continue">Archive Ad</Button>
                    <Button onClick={handleArchive} autoFocus className="del_pop_cancel">Cancel</Button>
                  </div>
                </Dialog>
              </div>
            </Stack>
          </div>
        </div>

        {/*  === Edit,Delete,Archived Content===  */}
        <div className='campaign_ad_content'>

          {/* Campaign Ad_ Image And Description */}
          <div className='cmpgn_ad_img'>
            <div className='__ad_img'>
              <img src={coke_ad} alt="" />
            </div>
            <div className='__ad_dscrptn'>
              <div className='__ad_dscrptn_ch'>
                <h5>AUIDIO/VIDEO AD</h5>
                <h4>Open a Coke,Open Happiness in Coca-Cola</h4>
                <h6>Posted On 2022 July 22</h6>
              </div>
              <button className='ad_create_workspace'>Create Workspace</button>
            </div>
          </div>

          {/* Recent Campaign */}
          <div className='recent_campaign_pr'>
            <h3>Recent Campaign</h3>
            <div className='__recnt_cmpgn_cmpnt_pr'>
              {/*   Convert To Map */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}
              <div className='__recnt_cmpgn_cmpnt'>
                <p className='_ad_strategy'>STRATEGY</p>
                <h4>
                  Camapign name here
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi?</p>
              </div>
              {/* =============== */}


            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CampaignAd
