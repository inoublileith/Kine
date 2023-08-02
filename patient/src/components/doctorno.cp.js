import React, { useState, useEffect, useMemo, useRef } from 'react'
import KineDataService from '../services/kine.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

const ShowDoctorsNO = (props) => {
  const [kines, setKines] = useState([])

  const kinesRef = useRef()
  kinesRef.current = kines
  const navigate = useNavigate()
  useEffect(() => {
    retrieveKines()
  }, [])
  const retrieveKines = () => {
    KineDataService.getAllkine()
      .then((response) => {
        setKines(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = () => {
    retrieveKines()
  }

  // const openRend = (id) => {
  //   const idkk = id
  //   navigate('/addrend/' + idkk)
  // }

  const KineCard = ({ id, nom, prenom, adresse, email, tel }) => {
    return (
      <div className='dc-docpostholder'>
        <div className='dc-docpostcontent'>
          <div className='dc-searchvtwo'>
            <figure className='dc-docpostimg'>
              <img
                src='assets/images/searchlist/img-17.jpg'
                alt='img description'
              />
              <figcaption>
                <span className='dc-featuredtag'>
                  <i className='fa fa-bolt'></i>
                </span>
              </figcaption>
            </figure>
            <div className='dc-title'>
              <a href='javascript:void(0)' className='dc-docstatus'>
                Doctor
              </a>
              <h3>
                <a href='javascript:void(0);'>
                  {nom} {prenom}{' '}
                </a>{' '}
                <i className='fa fa-award dc-awardtooltip'>
                  <em>{adresse}</em>
                </i>{' '}
                <i className='fa fa-check-circle dc-awardtooltip'>
                  <em>Medical Registration Verified</em>
                </i>
              </h3>
              <ul className='dc-docinfo'>
                <li>
                  <em>{tel}</em>
                </li>
                <li>
                  <span className='dc-stars'>
                    <span></span>
                  </span>
                  <em>2100 Feedback</em>
                </li>
              </ul>
            </div>
            <div className='dc-tags'>
              <ul>
                <li>
                  <a href='javascript:void(0);'>kinésithérapeute</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='dc-doclocation dc-doclocationvtwo'>
            <span>
              <i className='ti-direction-alt'></i> {adresse}
            </span>
            <span>
              <i className='ti-calendar'></i>
              <em className='dc-dayon'>{email}</em>, Th, Fr, Sa
            </span>
            {/* <span>
             <i className='ti-thumb-up'></i> 345 Votes
           </span> */}
            {/* <span>
             <i className='ti-wallet'></i> Starting From $50
           </span> */}
            {/* <span>
             <i className='ti-calendar'></i>{' '}
             <em className='dc-available'>Available Today</em>
           </span> */}
            <div className='dc-btnarea'>
              {/* <a href='javascript:void(0);' className='dc-btn'>
              Rendez-vous
            </a> */}

              {/* <button onClick={() => openRend(id)} className='dc-btn'>
                Rendez-vous
              </button> */}
              <a href='javascript:void(0);' className='dc-like dc-liked'>
                <i className='fa fa-heart'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='dc-innerbanner-holder dc-haslayout'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='dc-innerbanner'>
                <form className='dc-formtheme dc-form-advancedsearch dc-innerbannerform'>
                  <fieldset>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='search'
                        className='form-control'
                        placeholder='Search doctors, clinics, hospitals, etc.'
                      />
                    </div>
                    <div className='form-group'>
                      <div className='dc-select'>
                        <select
                          className='chosen-select locations'
                          data-placeholder='Country'
                          name='locations'
                        >
                          <option value='Location'>Location*</option>
                          <option value='United State'>United State</option>
                          <option value='Canada'>Canada</option>
                          <option value='England'>England</option>
                          <option value='Switzerland'>Switzerland</option>
                          <option value='New Zealand'>New Zealand</option>
                        </select>
                      </div>
                    </div>
                    <div className='dc-btnarea'>
                      <a href='javascript:void(0);' className='dc-btn'>
                        Search
                      </a>
                    </div>
                  </fieldset>
                </form>
                <a href='javascript:void(0);' className='dc-docsearch'>
                  <span className='dc-advanceicon'>
                    <i></i> <i></i> <i></i>
                  </span>
                  <span>
                    Advanced <br />
                    Search
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='dc-advancedsearch-holder'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='dc-advancedsearchs'>
                  <form className='dc-formtheme dc-form-advancedsearchs'>
                    <fieldset>
                      <div className='form-group'>
                        <div className='dc-select'>
                          <select>
                            <option value='Availability'>Availability</option>
                            <option value='Availability'>morning</option>
                            <option value='Availability'>evening</option>
                            <option value='Availability'>night</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='dc-select'>
                          <select>
                            <option value='Fee'>Consultation Fee</option>
                            <option value='Fee'>20 $</option>
                            <option value='Fee'>22 $</option>
                            <option value='Fee'>18 $</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='dc-typeoptions'>
                          <span>Type:</span>
                          <div className='dc-select'>
                            <select>
                              <option value='Show'>Show All</option>
                              <option value='Show'>Neurosurgeon</option>
                              <option>Dermatologists</option>
                              <option>Gastroenterologists</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='form-group'>
                        <span className='dc-checkbox'>
                          <input id='dc-show' type='checkbox' name='show' />
                          <label for='dc-show'>Show Nearest Only</label>
                        </span>
                      </div>
                      <div className='dc-btnarea'>
                        <a
                          href='javascript:void(0);'
                          className='dc-btn dc-resetbtn'
                        >
                          Reset Filters
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='dc-breadcrumbarea'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <ol className='dc-breadcrumb'>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Search Result</li>
                <li>Doctor Detail</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <main id='dc-main' className='dc-main dc-haslayout'>
        <div className='dc-haslayout dc-main-section'>
          <div className='container'>
            <div className='row'>
              <div id='dc-twocolumns' className='dc-twocolumns dc-haslayout'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 float-left'>
                  <div className='dc-docsingle-holder'>
                    {/* <ul className="dc-navdocsingletab nav navbar-nav">
										<li className="nav-item">
											<a className="active" id="locations-tab" data-toggle="tab" href="#locations">Available Locations</a>
										</li>
										<li className="nav-item">
											<a id="userdetails-tab" data-toggle="tab" href="#userdetails">User Details</a>
										</li>
										<li className="nav-item">
											<a id="consultation-tab" data-toggle="tab" href="#consultation">Online Consultation</a>
										</li>
										<li className="nav-item">
											<a id="feedback-tab" data-toggle="tab" href="#feedback">Feedback</a>
										</li>
										<li className="nav-item">
											<a id="articles-tab" data-toggle="tab" href="#articles">Articles</a>
										</li>
									</ul> */}
                    <div className='tab-content dc-haslayout'>
                      <div
                        className='dc-contentdoctab dc-location-holder tab-pane fade active show'
                        id='locations'
                      >
                        <div className='dc-searchresult-holder'>
                          <div className='dc-searchresult-head'>
                            <div className='dc-title'>
                              <h4>Doctors</h4>
                            </div>
                            <div className='dc-rightarea'>
                              <div className='dc-select'>
                                <select>
                                  <option value='Sort By:'>Sort By:</option>
                                  <option value='Sort By:'>
                                    Last created on top
                                  </option>
                                  <option value='Sort By:'>
                                    Last modified on top
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (A-Z)
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (Z-A)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='dc-searchresult-grid dc-searchresult-list dc-searchvlistvtwo'>
                            {/* <div className="dc-docpostholder">
														<div className="dc-docpostcontent">
															<div className="dc-searchvtwo">
																<figure className="dc-docpostimg">
																	<img src="assets/images/searchlist/img-16.jpg" alt="img description"/>
																	<figcaption>
																		<span className="dc-featuredtag"><i className="fa fa-bolt"></i></span>
																	</figcaption>
																</figure>
																<div className="dc-title">
																	<a href="javascript:void(0)" className="dc-docstatus">Private Clinic</a>
																	<h3><a href="javascript:void(0);">Smiles Multispeciality Clinic </a> <i className="fa fa-award dc-awardtooltip"><em>Medical Registration Verified</em></i> <i className="fa fa-check-circle dc-awardtooltip"><em>Medical Registration Verified</em></i></h3>
																	<ul className="dc-docinfo">
																		<li>
																			<em>MBBS, MCPS, MSc (Immunology)</em>
																		</li>
																		<li>
																			<span className="dc-stars"><span></span></span><em>2100 Feedback</em>
																		</li>
																	</ul>
																</div>
																<div className="dc-tags">
																	<ul>
																		<li>
																			<a href="javascript:void(0);">Artificial Teeth</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Conservative Dentistry</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Crowns Fixing</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Endosurgery</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Fixed Partial Denture (FPD)</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);" className="dc-tagviewall">View all</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="dc-doclocation dc-doclocationvtwo">
																<span><i className="ti-direction-alt"></i> Manchester, UK</span>
																<span><i className="ti-calendar"></i> Mo, Tu, <em className="dc-dayon">We</em>, Th, Fr, Sa</span>
																<span><i className="ti-thumb-up"></i> 345 Votes</span>
																<span><i className="ti-wallet"></i> Starting From $50</span>
																<span><i className="ti-calendar"></i> <em className="dc-available">Available Today</em></span>
																<div className="dc-btnarea">
																	<a href="javascript:void(0);" className="dc-btn">Book Now</a>
																	<a href="javascript:void(0);" className="dc-like dc-liked"><i className="fa fa-heart"></i></a>
																</div>
															</div>
														</div>
													</div> */}

                            {[...kines].reverse().map((kine, i) => (
                              <KineCard key={i} {...kine} />
                            ))}
                            {/* <div className="dc-docpostholder">
														<div className="dc-docpostcontent">
															<div className="dc-searchvtwo">
																<figure className="dc-docpostimg">
																	<img src="assets/images/searchlist/img-18.jpg" alt="img description"/>
																	<figcaption>
																		<span className="dc-featuredtag"><i className="fa fa-bolt"></i></span>
																	</figcaption>
																</figure>
																<div className="dc-title">
																	<a href="javascript:void(0)" className="dc-docstatus">Hospital</a>
																	<h3><a href="javascript:void(0);">Your Dental Life Hospital </a> <i className="fa fa-award dc-awardtooltip"><em>Medical Registration Verified</em></i> <i className="fa fa-check-circle dc-awardtooltip"><em>Medical Registration Verified</em></i></h3>
																	<ul className="dc-docinfo">
																		<li>
																			<em>Clin Immn (Euro), FCPP</em>
																		</li>
																		<li>
																			<span className="dc-stars"><span></span></span><em>2100 Feedback</em>
																		</li>
																	</ul>
																</div>
																<div className="dc-tags">
																	<ul>
																		<li>
																			<a href="javascript:void(0);">Artificial Teeth</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Conservative Dentistry</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Crowns Fixing</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Endosurgery</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Fixed Partial Denture (FPD)</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);" className="dc-tagviewall">View all</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="dc-doclocation dc-doclocationvtwo">
																<span><i className="ti-direction-alt"></i> Manchester, UK</span>
																<span><i className="ti-calendar"></i> Mo, Tu, <em className="dc-dayon">We</em>, Th, Fr, Sa</span>
																<span><i className="ti-thumb-up"></i> 345 Votes</span>
																<span><i className="ti-wallet"></i> Starting From $50</span>
																<span><i className="ti-calendar"></i> <em className="dc-available">Available Today</em></span>
																<div className="dc-btnarea">
																	<a href="javascript:void(0);" className="dc-btn">Book Now</a>
																	<a href="javascript:void(0);" className="dc-like dc-liked"><i className="fa fa-heart"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="dc-docpostholder">
														<div className="dc-docpostcontent">
															<div className="dc-searchvtwo">
																<figure className="dc-docpostimg">
																	<img src="assets/images/searchlist/img-19.jpg" alt="img description"/>
																	<figcaption>
																		<span className="dc-featuredtag"><i className="fa fa-bolt"></i></span>
																	</figcaption>
																</figure>
																<div className="dc-title">
																	<a href="javascript:void(0)" className="dc-docstatus">Private Clinic</a>
																	<h3><a href="javascript:void(0);">Docroc Smile &amp; Dental Care </a> <i className="fa fa-award dc-awardtooltip"><em>Medical Registration Verified</em></i> <i className="fa fa-check-circle dc-awardtooltip"><em>Medical Registration Verified</em></i></h3>
																	<ul className="dc-docinfo">
																		<li>
																			<em>FAAAAI (USA), PGT Allergy (UK)</em>
																		</li>
																		<li>
																			<span className="dc-stars"><span></span></span><em>2100 Feedback</em>
																		</li>
																	</ul>
																</div>
																<div className="dc-tags">
																	<ul>
																		<li>
																			<a href="javascript:void(0);">Artificial Teeth</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Conservative Dentistry</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Crowns Fixing</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Endosurgery</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);">Fixed Partial Denture (FPD)</a>
																		</li>
																		<li>
																			<a href="javascript:void(0);" className="dc-tagviewall">View all</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div className="dc-doclocation dc-doclocationvtwo">
																<span><i className="ti-direction-alt"></i> Manchester, UK</span>
																<span><i className="ti-calendar"></i> Mo, Tu, <em className="dc-dayon">We</em>, Th, Fr, Sa</span>
																<span><i className="ti-thumb-up"></i> 345 Votes</span>
																<span><i className="ti-wallet"></i> Starting From $50</span>
																<span><i className="ti-calendar"></i> <em className="dc-available">Available Today</em></span>
																<div className="dc-btnarea">
																	<a href="javascript:void(0);" className="dc-btn">Book Now</a>
																	<a href="javascript:void(0);" className="dc-like dc-liked"><i className="fa fa-heart"></i></a>
																</div>
															</div>
														</div>
													</div> */}
                            <nav className='dc-pagination'>
                              <ul>
                                <li className='dc-prevpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-left'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>1</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>2</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>3</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>4</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>...</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>50</a>
                                </li>
                                <li className='dc-nextpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-right'></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className='dc-shareprofile'>
                          <ul className='dc-simplesocialicons dc-socialiconsborder'>
                            <li className='dc-sharecontent'>
                              <span>Share Profile:</span>
                            </li>
                            <li className='dc-facebook'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-facebook-f'></i>
                              </a>
                            </li>
                            <li className='dc-twitter'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-twitter'></i>
                              </a>
                            </li>
                            <li className='dc-linkedin'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-linkedin-in'></i>
                              </a>
                            </li>
                            <li className='dc-instagram'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-instagram'></i>
                              </a>
                            </li>
                            <li className='dc-googleplus'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-google-plus-g'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className='dc-contentdoctab dc-userdetails-holder tab-pane'
                        id='userdetails'
                      >
                        <div className='dc-aboutdoc dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>About “Dr. Tenisha”</h3>
                          </div>
                          <div className='dc-description'>
                            <p>
                              Consectetur adipisicing eliteiuim sete eiu tempor
                              incidit utoreas etnalom dolore maena aliquae
                              udiminimate veniam quis norud exercita ullamco
                              laboris nisi aliquip commodo consequat Duis aute
                              irure dolor inem reprederit inoluptate velit esse
                              cillum dolore eu fugiat nulla pariatur eexcepteur
                              occaecat cupidatat non proident sunt in culpa qui
                              officia deserunt mollit anim id est laborum sed ut
                              perspiciatis unde omnis.
                            </p>
                            <p>
                              Este natus error sit voluptatem accusantium
                              doloremque laudantium, totam rem aperiam, eaque
                              ipsa quae ab illo inventore veritatis et quasi
                              architecto beatae vitae dicta sunt explicabo. Nemo
                              enim ipsam voluptatem quia voluptas sit aspernatur
                              aut odit aut fugit sed quia consequuntur.
                            </p>
                          </div>
                        </div>
                        <div className='dc-services-holder dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>Offered Services</h3>
                          </div>
                          <div
                            id='dc-accordion'
                            className='dc-accordion'
                            role='tablist'
                            aria-multiselectable='true'
                          >
                            <div className='dc-panel'>
                              <div className='dc-paneltitle'>
                                <figure className='dc-titleicon'>
                                  <img
                                    src='assets/images/icon-imgs/img-02.png'
                                    alt='img description'
                                  />
                                </figure>
                                <span>
                                  Dentistry<em>1507 Services</em>
                                </span>{' '}
                              </div>
                              <div className='dc-panelcontent'>
                                <div
                                  id='dc-childaccordion'
                                  className='dc-childaccordion'
                                  role='tablist'
                                  aria-multiselectable='true'
                                >
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Anatomy scan<em>$50</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Checkup/Antenatal exercises
                                        <em>$250</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Services<em>$20</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Caesarean Section/ C-Section
                                        <em>$200</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='dc-panel'>
                              <div className='dc-paneltitle'>
                                <figure className='dc-titleicon'>
                                  <img
                                    src='assets/images/icon-imgs/img-03.png'
                                    alt='img description'
                                  />
                                </figure>
                                <span>
                                  Gynecology<em>08 Services</em>
                                </span>{' '}
                              </div>
                              <div className='dc-panelcontent'>
                                <div
                                  id='dc-childaccordion'
                                  className='dc-childaccordion'
                                  role='tablist'
                                  aria-multiselectable='true'
                                >
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Anatomy scan<em>$50</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Checkup/Antenatal exercises
                                        <em>$250</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Services<em>$20</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Caesarean Section/ C-Section
                                        <em>$200</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='dc-panel'>
                              <div className='dc-paneltitle'>
                                <figure className='dc-titleicon'>
                                  <img
                                    src='assets/images/icon-imgs/img-04.png'
                                    alt='img description'
                                  />
                                </figure>
                                <span>
                                  Radiology<em>1507 Services</em>
                                </span>{' '}
                              </div>
                              <div className='dc-panelcontent'>
                                <div
                                  id='dc-childaccordion'
                                  className='dc-childaccordion'
                                  role='tablist'
                                  aria-multiselectable='true'
                                >
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Anatomy scan<em>$50</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Checkup/Antenatal exercises
                                        <em>$250</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Antenatal Services<em>$20</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='dc-subpanel'>
                                    <div className='dc-subpaneltitle'>
                                      <span>
                                        Caesarean Section/ C-Section
                                        <em>$200</em>
                                      </span>
                                    </div>
                                    <div className='dc-subpanelcontent'>
                                      <div className='dc-description'>
                                        <p>
                                          Consectetur adipisicing elit sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua enim adinim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut
                                          <a href='javascript:void(0);'>
                                            {' '}
                                            aliquip ex ea commodo
                                          </a>{' '}
                                          consequat. Duis aute irureti dolor in
                                          reprehenderit in voluptate velit esse
                                          cillum dolore.
                                        </p>
                                        <p>
                                          Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia
                                          deserunt mollit anim id est laborume
                                          Sed ut perspiciatis unde omnis iste{' '}
                                          <a href='javascript:void(0);'>
                                            natus error
                                          </a>{' '}
                                          sit voluptatem accusantium doloremque.
                                        </p>
                                        <p>
                                          Laudantium, totaman rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis
                                          et quasi architecto beatae vitae dicta
                                          sunt explicabo. Nemo enim ipsam
                                          voluptatem quia voluptas sit
                                          aspernatur aut odit aut fugit, sed
                                          quiatei consequuntur magni dolores eos
                                          qui ratione voluptatem{' '}
                                          <a href='javascript:void(0);'>
                                            sequi nesciunt.
                                          </a>{' '}
                                          Neque porro quisquam est, qui dem
                                          ipsum quia dolor sit amet,
                                          consectetur, adipisci velit, sed quia
                                          non numquam eius modi tempora incidunt
                                          ut labore et dolore magnam aliquam
                                          quaerat voluptatem.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='dc-experiencedoc dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>Experience</h3>
                          </div>
                          <ul className='dc-expandedu'>
                            <li>
                              <span>
                                General Dentistry <em>( 2018 - Present )</em>
                              </span>
                              <em>Wide Smile Dental Clinic</em>
                            </li>
                            <li>
                              <span>
                                Medical &amp; General Dentistry{' '}
                                <em>( 2016 - 2018 )</em>
                              </span>
                              <em>Aurora Medical &amp; Dental College</em>
                            </li>
                            <li>
                              <span>
                                Sr. Consultant <em>( 2014 - 2016 )</em>
                              </span>
                              <em>New Apollo Hospital, California</em>
                            </li>
                            <li>
                              <span>
                                Associate Professor <em>( 2010 - 2014 )</em>
                              </span>
                              <em>Shyamala Reddy Dental College</em>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-education-holder dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>Education</h3>
                          </div>
                          <ul className='dc-expandedu'>
                            <li>
                              <span>
                                Periodontology &amp; Oral Implantology{' '}
                                <em>( 2010 - 2012 )</em>
                              </span>
                              <em>Delta Tricon Dental College</em>
                            </li>
                            <li>
                              <span>
                                MBA - Hospital Managementy{' '}
                                <em>( 2008 - 2010 )</em>
                              </span>
                              <em>Arena Missions University</em>
                            </li>
                            <li>
                              <span>
                                Oral Medicine and Radiology{' '}
                                <em>( 2006 - 2008 )</em>
                              </span>
                              <em>New Apollo Hospital, California</em>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-specializations dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>
                              Specializations{' '}
                              <a href='javascript:void(0);'>(more)</a>
                            </h3>
                          </div>
                          <ul className='dc-specializationslist'>
                            <li>
                              <span>Dentist</span>
                            </li>
                            <li>
                              <span>Periodontist</span>
                            </li>
                            <li>
                              <span>Implantologist</span>
                            </li>
                            <li>
                              <span>Dental Surgeon</span>
                            </li>
                            <li>
                              <span>Cosmetic/Aesthetic Dentist</span>
                            </li>
                            <li>
                              <span>Preventive Dentistry</span>
                            </li>
                            <li>
                              <span>Endodontist</span>
                            </li>
                            <li>
                              <span>Orthodontist</span>
                            </li>
                            <li>
                              <span>Primary Care Dentist</span>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-awards-holder dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>Awards and Recognitions</h3>
                          </div>
                          <ul className='dc-expandedu'>
                            <li>
                              <span>
                                Recognized by American Dental Council of America{' '}
                                <em>( 2006 )</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Recognized by Karnataka State Dental Council{' '}
                                <em>( 2006 )</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Recognized by Manchester Academy of Oral
                                Medicine and Radiology <em>( 2006 )</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-specializations dc-aboutinfo dc-memberships'>
                          <div className='dc-infotitle'>
                            <h3>
                              Memberships{' '}
                              <a href='javascript:void(0);'>(more)</a>
                            </h3>
                          </div>
                          <ul className='dc-specializationslist'>
                            <li>
                              <span>
                                Manchester Academy of Oral Medicine and
                                Radiology
                              </span>
                            </li>
                            <li>
                              <span>United State Dental Council</span>
                            </li>
                            <li>
                              <span>
                                International Association of General Dentistry
                                (IAGD)
                              </span>
                            </li>
                            <li>
                              <span>
                                International Federation of Dental Educators and
                                Associations (IFDEA, USA)
                              </span>
                            </li>
                            <li>
                              <span>
                                Sydney Academy of Aesthetic &amp; Cosmetic
                                Dentistry
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-specializations dc-aboutinfo dc-memberships'>
                          <div className='dc-infotitle'>
                            <h3>Registrations</h3>
                          </div>
                          <ul className='dc-specializationslist'>
                            <li>
                              <span>
                                19255A United State Dental Council, 2005
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-downloads-holder dc-aboutinfo'>
                          <div className='dc-infotitle'>
                            <h3>Downloads</h3>
                          </div>
                          <ul className='dc-downloads-listing'>
                            <li>
                              <a href='javascript:void(0);'>
                                <h3>
                                  Muscles Strength Recovery.pdf
                                  <span>2.60 MB</span>
                                </h3>
                              </a>
                            </li>
                            <li>
                              <a href='javascript:void(0);'>
                                <h3>
                                  Wisdom tooth coming.pdf<span>2.60 MB</span>
                                </h3>
                              </a>
                            </li>
                            <li>
                              <a href='javascript:void(0);'>
                                <h3>
                                  Gap between teeth.pdf<span>2.60 MB</span>
                                </h3>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='dc-shareprofile'>
                          <ul className='dc-simplesocialicons dc-socialiconsborder'>
                            <li className='dc-sharecontent'>
                              <span>Share Profile:</span>
                            </li>
                            <li className='dc-facebook'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-facebook-f'></i>
                              </a>
                            </li>
                            <li className='dc-twitter'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-twitter'></i>
                              </a>
                            </li>
                            <li className='dc-linkedin'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-linkedin-in'></i>
                              </a>
                            </li>
                            <li className='dc-instagram'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-instagram'></i>
                              </a>
                            </li>
                            <li className='dc-googleplus'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-google-plus-g'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className='dc-contentdoctab dc-consultation-holder tab-pane'
                        id='consultation'
                      >
                        <div className='dc-consultation'>
                          <div className='dc-searchresult-head'>
                            <div className='dc-title'>
                              <h4>“Dr. Tenisha” Locations</h4>
                            </div>
                            <div className='dc-rightarea'>
                              <div className='dc-select'>
                                <select>
                                  <option value='Sort By:'>Sort By:</option>
                                  <option value='Sort By:'>
                                    Last created on top
                                  </option>
                                  <option value='Sort By:'>
                                    Last modified on top
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (A-Z)
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (Z-A)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='dc-consultation-content'>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor1'>
                                <img
                                  src='assets/images/icon-imgs/img-05.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Mouth open while sleeping
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor2'>
                                <img
                                  src='assets/images/icon-imgs/img-06.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Internal Braces on monthly installments.
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor3'>
                                <img
                                  src='assets/images/icon-imgs/img-07.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Swollen gums near the end of the tooth
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor1'>
                                <img
                                  src='assets/images/icon-imgs/img-05.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Mouth open while sleeping
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor2'>
                                <img
                                  src='assets/images/icon-imgs/img-06.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Internal Braces on monthly installments.
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor3'>
                                <img
                                  src='assets/images/icon-imgs/img-07.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Swollen gums near the end of the tooth
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor1'>
                                <img
                                  src='assets/images/icon-imgs/img-05.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Mouth open while sleeping
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor2'>
                                <img
                                  src='assets/images/icon-imgs/img-06.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Internal Braces on monthly installments.
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor3'>
                                <img
                                  src='assets/images/icon-imgs/img-07.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Swollen gums near the end of the tooth
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Amet consectetur adipisicing eliteiuim sete
                                  eiu tempor incidit utoreas etnalom dolore
                                  maena aliqua udiminimate veniam quis norud
                                  exercita ullamco laboris nisi aliquip commodo
                                  consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img dc-imgcolor1'>
                                <img
                                  src='assets/images/icon-imgs/img-05.png'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Mouth open while sleeping
                                  </a>
                                  <em>Jun 27, 2018</em>
                                </h5>
                                <span>Answered by “Dr. Tenisha”</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                </p>
                              </div>
                            </div>
                            <nav className='dc-pagination'>
                              <ul>
                                <li className='dc-prevpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-left'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>1</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>2</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>3</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>4</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>...</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>50</a>
                                </li>
                                <li className='dc-nextpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-right'></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className='dc-shareprofile'>
                          <ul className='dc-simplesocialicons dc-socialiconsborder'>
                            <li className='dc-sharecontent'>
                              <span>Share Profile:</span>
                            </li>
                            <li className='dc-facebook'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-facebook-f'></i>
                              </a>
                            </li>
                            <li className='dc-twitter'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-twitter'></i>
                              </a>
                            </li>
                            <li className='dc-linkedin'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-linkedin-in'></i>
                              </a>
                            </li>
                            <li className='dc-instagram'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-instagram'></i>
                              </a>
                            </li>
                            <li className='dc-googleplus'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-google-plus-g'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className='dc-contentdoctab dc-feedback-holder tab-pane'
                        id='feedback'
                      >
                        <div className='dc-feedback'>
                          <div className='dc-searchresult-head'>
                            <div className='dc-title'>
                              <h4>Patient Feedback</h4>
                            </div>
                            <div className='dc-rightarea'>
                              <div className='dc-select'>
                                <select>
                                  <option value='Sort By:'>Sort By:</option>
                                  <option value='Sort By:'>
                                    Last created on top
                                  </option>
                                  <option value='Sort By:'>
                                    Last modified on top
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (A-Z)
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (Z-A)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='dc-consultation-content dc-feedback-content'>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img'>
                                <img
                                  src='assets/images/feedback/img-01.jpg'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Visited For Dental Checkup (General)
                                  </a>
                                  <em>
                                    Carolin Summerlin{' '}
                                    <i className='fa fa-check-circle'></i>
                                  </em>
                                </h5>
                                <span>Mar 27, 2019</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                  <a href='javascript:void(0);'>(more)</a>
                                </p>
                                <a href='javascript:void(0);'>
                                  <i className='ti-thumb-up'></i>I Recommend
                                  This Doctor
                                </a>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img'>
                                <img
                                  src='assets/images/feedback/img-02.jpg'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Visited For Conservative Dentistry
                                  </a>
                                  <em>
                                    Charlene Trippe{' '}
                                    <i className='fa fa-check-circle'></i>
                                  </em>
                                </h5>
                                <span>Mar 27, 2019</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                  <a href='javascript:void(0);'>(more)</a>
                                </p>
                                <a
                                  href='javascript:void(0);'
                                  className='dontrecommend'
                                >
                                  <i className='ti-thumb-up'></i>I Don’t
                                  Recommend
                                </a>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img'>
                                <img
                                  src='assets/images/feedback/img-03.jpg'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Visited For Teeth Sensitive to Hot and Cold
                                  </a>
                                  <em>
                                    Mardell Buchan{' '}
                                    <i className='fa fa-check-circle'></i>
                                  </em>
                                </h5>
                                <span>Mar 27, 2019</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                  <a href='javascript:void(0);'>(more)</a>
                                </p>
                                <a href='javascript:void(0);'>
                                  <i className='ti-thumb-up'></i>I Recommend
                                  This Doctor
                                </a>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img'>
                                <img
                                  src='assets/images/feedback/img-04.jpg'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Visited For Dental Fillings
                                  </a>
                                  <em>
                                    Angie Michell{' '}
                                    <i className='fa fa-check-circle'></i>
                                  </em>
                                </h5>
                                <span>Mar 27, 2019</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                  <a href='javascript:void(0);'>(more)</a>
                                </p>
                                <a
                                  href='javascript:void(0);'
                                  className='dontrecommend'
                                >
                                  <i className='ti-thumb-up'></i>I Don’t
                                  Recommend
                                </a>
                              </div>
                            </div>
                            <div className='dc-consultation-details'>
                              <figure className='dc-consultation-img'>
                                <img
                                  src='assets/images/feedback/img-05.jpg'
                                  alt='img description'
                                />
                              </figure>
                              <div className='dc-consultation-title'>
                                <h5>
                                  <a href='javascript:void(0);'>
                                    Visited For Toothache, Loose Teeth
                                  </a>
                                  <em>
                                    Katheleen Friesen{' '}
                                    <i className='fa fa-check-circle'></i>
                                  </em>
                                </h5>
                                <span>Mar 27, 2019</span>
                              </div>
                              <div className='dc-description'>
                                <p>
                                  Eliteiuim sete eiu tempor incidit utoreas
                                  etnalom dolore maena aliqua udiminimate veniam
                                  quis norud exercita ullamco laboris nisi
                                  aliquip commodo consequat duis aute irure.
                                  <a href='javascript:void(0);'>(more)</a>
                                </p>
                                <a href='javascript:void(0);'>
                                  <i className='ti-thumb-up'></i>I Don’t
                                  Recommend
                                </a>
                              </div>
                            </div>
                            <nav className='dc-pagination'>
                              <ul>
                                <li className='dc-prevpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-left'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>1</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>2</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>3</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>4</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>...</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>50</a>
                                </li>
                                <li className='dc-nextpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-right'></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className='dc-shareprofile'>
                          <ul className='dc-simplesocialicons dc-socialiconsborder'>
                            <li className='dc-sharecontent'>
                              <span>Share Profile:</span>
                            </li>
                            <li className='dc-facebook'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-facebook-f'></i>
                              </a>
                            </li>
                            <li className='dc-twitter'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-twitter'></i>
                              </a>
                            </li>
                            <li className='dc-linkedin'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-linkedin-in'></i>
                              </a>
                            </li>
                            <li className='dc-instagram'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-instagram'></i>
                              </a>
                            </li>
                            <li className='dc-googleplus'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-google-plus-g'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className='dc-contentdoctab dc-articles-holder tab-pane'
                        id='articles'
                      >
                        <div className='dc-articles'>
                          <div className='dc-searchresult-head'>
                            <div className='dc-title'>
                              <h4>Articles By “Dr. Tenisha”</h4>
                            </div>
                            <div className='dc-rightarea'>
                              <div className='dc-select'>
                                <select>
                                  <option value='Sort By:'>Sort By:</option>
                                  <option value='Sort By:'>
                                    Last created on top
                                  </option>
                                  <option value='Sort By:'>
                                    Last modified on top
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (A-Z)
                                  </option>
                                  <option value='Sort By:'>
                                    Alphabetically (Z-A)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='dc-articleslist-content dc-articles-list'>
                            <div className='dc-article'>
                              <figure className='dc-articleimg'>
                                <img
                                  src='assets/images/articles/img-04.jpg'
                                  alt='img description'
                                />
                                <figcaption>
                                  <div className='dc-articlesdocinfo'>
                                    <img
                                      src='assets/images/articles/user/img-01.jpg'
                                      alt='img description'
                                    />
                                    <span>Lincoln Claggett</span>
                                  </div>
                                </figcaption>
                              </figure>
                              <div className='dc-articlecontent'>
                                <div className='dc-title'>
                                  <a
                                    href='javascript:void(0);'
                                    className='dc-articleby'
                                  >
                                    Business
                                  </a>
                                  <h3>
                                    <a href='javascript:void(0);'>
                                      Best Way to Stay Healthy and Boost Your
                                      Metabolism
                                    </a>
                                  </h3>
                                  <span className='dc-datetime'>
                                    <i className='ti-calendar'></i> Jun 27, 2019
                                  </span>
                                </div>
                                <ul className='dc-moreoptions'>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-heart'></i> 12,032
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-eye'></i> 1,26,558
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-share'></i> Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='dc-article'>
                              <figure className='dc-articleimg'>
                                <img
                                  src='assets/images/articles/img-05.jpg'
                                  alt='img description'
                                />
                                <figcaption>
                                  <div className='dc-articlesdocinfo'>
                                    <img
                                      src='assets/images/articles/user/img-02.jpg'
                                      alt='img description'
                                    />
                                    <span>Lincoln Claggett</span>
                                  </div>
                                </figcaption>
                              </figure>
                              <div className='dc-articlecontent'>
                                <div className='dc-title'>
                                  <a
                                    href='javascript:void(0);'
                                    className='dc-articleby'
                                  >
                                    Medical
                                  </a>
                                  <h3>
                                    <a href='javascript:void(0);'>
                                      10 Tips, We Challenge You Won’t Get Tired
                                      Easily Even After Hard Work
                                    </a>
                                  </h3>
                                  <span className='dc-datetime'>
                                    <i className='ti-calendar'></i> Jun 27, 2019
                                  </span>
                                </div>
                                <ul className='dc-moreoptions'>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-heart'></i> 12,032
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-eye'></i> 1,26,558
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-share'></i> Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='dc-article'>
                              <figure className='dc-articleimg'>
                                <img
                                  src='assets/images/articles/img-06.jpg'
                                  alt='img description'
                                />
                                <figcaption>
                                  <div className='dc-articlesdocinfo'>
                                    <img
                                      src='assets/images/articles/user/img-03.jpg'
                                      alt='img description'
                                    />
                                    <span>Lincoln Claggett</span>
                                  </div>
                                </figcaption>
                              </figure>
                              <div className='dc-articlecontent'>
                                <div className='dc-title'>
                                  <a
                                    href='javascript:void(0);'
                                    className='dc-articleby'
                                  >
                                    DIY, Freelancing
                                  </a>
                                  <h3>
                                    <a href='javascript:void(0);'>
                                      Always Keep Your First Aid Box Ready Near
                                      to You For Healthy Life
                                    </a>
                                  </h3>
                                  <span className='dc-datetime'>
                                    <i className='ti-calendar'></i> Jun 27, 2019
                                  </span>
                                </div>
                                <ul className='dc-moreoptions'>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-heart'></i> 12,032
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-eye'></i> 1,26,558
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-share'></i> Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='dc-article'>
                              <figure className='dc-articleimg'>
                                <img
                                  src='assets/images/articles/img-07.jpg'
                                  alt='img description'
                                />
                                <figcaption>
                                  <div className='dc-articlesdocinfo'>
                                    <img
                                      src='assets/images/articles/user/img-01.jpg'
                                      alt='img description'
                                    />
                                    <span>Lincoln Claggett</span>
                                  </div>
                                </figcaption>
                              </figure>
                              <div className='dc-articlecontent'>
                                <div className='dc-title'>
                                  <a
                                    href='javascript:void(0);'
                                    className='dc-articleby'
                                  >
                                    Business, Lifestyle
                                  </a>
                                  <h3>
                                    <a href='javascript:void(0);'>
                                      There is only one happiness in this life,
                                      to love and be loved.
                                    </a>
                                  </h3>
                                  <span className='dc-datetime'>
                                    <i className='ti-calendar'></i> Jun 27, 2019
                                  </span>
                                </div>
                                <ul className='dc-moreoptions'>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-heart'></i> 12,032
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-eye'></i> 1,26,558
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-share'></i> Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='dc-article'>
                              <figure className='dc-articleimg'>
                                <img
                                  src='assets/images/articles/img-08.jpg'
                                  alt='img description'
                                />
                                <figcaption>
                                  <div className='dc-articlesdocinfo'>
                                    <img
                                      src='assets/images/articles/user/img-02.jpg'
                                      alt='img description'
                                    />
                                    <span>Lincoln Claggett</span>
                                  </div>
                                </figcaption>
                              </figure>
                              <div className='dc-articlecontent'>
                                <div className='dc-title'>
                                  <a
                                    href='javascript:void(0);'
                                    className='dc-articleby'
                                  >
                                    Business, Lifestyle
                                  </a>
                                  <h3>
                                    <a href='javascript:void(0);'>
                                      A flower cannot blossom without sunshine,
                                      and man cannot live without health.
                                    </a>
                                  </h3>
                                  <span className='dc-datetime'>
                                    <i className='ti-calendar'></i> Jun 27, 2019
                                  </span>
                                </div>
                                <ul className='dc-moreoptions'>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-heart'></i> 12,032
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-eye'></i> 1,26,558
                                    </a>
                                  </li>
                                  <li>
                                    <a href='javascript:void(0);'>
                                      <i className='ti-share'></i> Share
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <nav className='dc-pagination'>
                              <ul>
                                <li className='dc-prevpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-left'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>1</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>2</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>3</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>4</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>...</a>
                                </li>
                                <li>
                                  <a href='javascrip:void(0);'>50</a>
                                </li>
                                <li className='dc-nextpage'>
                                  <a href='javascrip:void(0);'>
                                    <i className='lnr lnr-chevron-right'></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className='dc-shareprofile'>
                          <ul className='dc-simplesocialicons dc-socialiconsborder'>
                            <li className='dc-sharecontent'>
                              <span>Share Profile:</span>
                            </li>
                            <li className='dc-facebook'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-facebook-f'></i>
                              </a>
                            </li>
                            <li className='dc-twitter'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-twitter'></i>
                              </a>
                            </li>
                            <li className='dc-linkedin'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-linkedin-in'></i>
                              </a>
                            </li>
                            <li className='dc-instagram'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-instagram'></i>
                              </a>
                            </li>
                            <li className='dc-googleplus'>
                              <a href='javascript:void(0);'>
                                <i className='fab fa-google-plus-g'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 float-left'>
                  <aside
                    id='dc-sidebar'
                    className='dc-sidebar dc-sidebar-grid float-left mt-xl-0'
                  >
                    <div className='dc-widget dc-onlineoptions'>
                      <figure className='dc-onlinuserimg'>
                        <img src='assets/images/doctors/img-11.jpg' />
                        <figcaption>
                          <span>Live</span>
                        </figcaption>
                      </figure>
                      <div className='dc-onlineoption-content'>
                        <div className='dc-title'>
                          <h3>
                            <span>Stop Waiting in Queue</span> Ask Query Online
                          </h3>
                        </div>
                        <div className='dc-btnarea'>
                          <a
                            href='javascript:void(0);'
                            className='dc-btn dc-btnactive'
                          >
                            Book Audio / Video Call
                          </a>
                          <span>
                            50,000+<em>Consultation Served </em>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='dc-widget dc-reportform-holder'>
                      <div className='dc-widgettitle'>
                        <h3>Report Profile</h3>
                      </div>
                      <div className='dc-widgetcontent'>
                        <form className='dc-formtheme dc-reportform'>
                          <div className='dc-appemail-form'>
                            <input
                              type='email'
                              name='email'
                              value=''
                              className='form-control'
                              placeholder='Email ID'
                              required=''
                            />
                          </div>
                          <div className='form-group'>
                            <textarea
                              className='form-control'
                              placeholder='Add Description'
                            ></textarea>
                          </div>
                          <div className='dc-btnarea'>
                            <a href='javascript:void(0);' className='dc-btn'>
                              Report Now
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='dc-widget dc-mobileappoptions'>
                      <figure className='dc-appimgs'>
                        <img src='assets/images/doctors/img-12.jpg' />
                      </figure>
                      <div className='dc-mobileapp-content'>
                        <div className='dc-title'>
                          <h3>
                            <span>Care on the GO</span> Get Mobile App
                          </h3>
                        </div>
                        <div className='dc-description'>
                          <p>
                            A dipisicing sed dotem eiusmou tempor incididunt ut
                            labore
                          </p>
                        </div>
                        <div className='dc-appemail-form'>
                          <input
                            type='email'
                            name='email'
                            value=''
                            className='form-control'
                            placeholder='Email ID'
                            required=''
                          />
                          <button type='submit'>
                            <i className='fa fa-paper-plane'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <figure className='dc-searchresultad'>
                      <a href='javascript:void(0);'>
                        <img
                          src='assets/images/ads-img/img-02.jpg'
                          alt='img description'
                        />
                      </a>
                      <span>Advertisement 770px X 90px</span>
                    </figure>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default ShowDoctorsNO
