import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SeanceDataService from '../services/seance.service'
import KineDataService from '../services/kine.service'
const Seance = () => {
  const navigate = useNavigate()
  const [seances, setRends] = useState([])

  const rendsRef = useRef()

  rendsRef.current = seances

  useEffect(() => {
    retrieveRends()
  }, [])

  const { user: currentUser } = useSelector((state) => state.auth)
  const id = currentUser.id
  console.log(id)
  const retrieveRends = () => {
    SeanceDataService.getp(id)
      .then((response) => {
        setRends(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = () => {
    retrieveRends()
  }

  const supprimer = (id) => {
    SeanceDataService.delete(id)
      .then((response) => {
        //  alert('voulez vous supprimer ce rendez-vous ')
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }



  const RendCard = ({ idrend, date, debut , fin, nom, prenom, tel }) => {
    return (
      <div className='col-12 col-sm-6 col-xl-4'>
        <div className='dc-article'>
          <figure className='dc-articleimg'>
            <img src='assets/images/blog/img-02.jpg' alt='img description' />
            <figcaption>
              <div className='dc-articlesdocinfo'>
                <img
                  src='assets/images/articles/user/img-02.jpg'
                  alt='img description'
                />
                <span>
                  {nom} {prenom}
                </span>
              </div>
            </figcaption>
          </figure>
          <div className='dc-articlecontent'>
            <div className='dc-title dc-ellipsis dc-titlep'>
              <span className='dc-datetime'>
                <i className='ti-calendar'></i> {date}
              </span>{' '}
              <a href='javascript:void(0);' className='dc-articleby'>
               Début :{debut }
              </a>
              <a href='javascript:void(0);' className='dc-articleby'>
                Fin : {fin}
              </a>
              <h3>
                <a href='javascript:void(0);'></a>
              </h3>
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
              </ol>
            </div>
          </div>
        </div>
      </div>
      <main id='dc-main' className='dc-main dc-haslayout'>
        <div className='dc-haslayout dc-main-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-xl-3 float-left order-last order-md-first'>
                <aside
                  id='dc-sidebar'
                  className='dc-sidebar dc-sidebar-grid float-left mt-md-0'
                >
                  <div className='dc-widget dc-featured'>
                    <div className='dc-widgettitle'>
                      <h3>Featured Posts</h3>
                    </div>
                    <div className='dc-widgetcontent'>
                      <ul className='dc-featured-content dc-widgeticon '>
                        <li>
                          <img
                            src='assets/images/blog/icons/img-01.jpg'
                            alt=''
                          />
                          <span>
                            <a href='javascript:void(0);'>
                              Internal Braces on TV{' '}
                            </a>
                            <span>Jun 27, 2018</span>
                          </span>
                        </li>
                        <li>
                          <img
                            src='assets/images/blog/icons/img-02.jpg'
                            alt=''
                          />
                          <span>
                            <a href='javascript:void(0);'>
                              15 Reasons Why People{' '}
                            </a>
                            <span>Jun 27, 2018</span>
                          </span>
                        </li>
                        <li>
                          <img
                            src='assets/images/blog/icons/img-03.jpg'
                            alt=''
                          />
                          <span>
                            <a href='javascript:void(0);'>
                              Five Questions To Ask{' '}
                            </a>
                            <span>Jun 27, 2018</span>
                          </span>
                        </li>
                        <li>
                          <img
                            src='assets/images/blog/icons/img-04.jpg'
                            alt=''
                          />
                          <span>
                            <a href='javascript:void(0);'>
                              Understand Business{' '}
                            </a>
                            <span>Jun 27, 2018</span>
                          </span>
                        </li>
                        <li>
                          <img
                            src='assets/images/blog/icons/img-05.jpg'
                            alt=''
                          />
                          <span>
                            <a href='javascript:void(0);'>
                              Why Business Had Bee{' '}
                            </a>
                            <span>Jun 27, 2018</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='dc-widget dc-mobileappoptions'>
                    <figure className='dc-appimgs'>
                      <img
                        src='assets/images/doctors/img-12.jpg'
                        alt='Image Description'
                      />
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
              <div className='col-md-8 col-xl-9 float-left'>
                <div className='dc-searchresult-head pt-sm-0'>
                  <div className='dc-title'>
                    <h3>Votre Rendez-vous</h3>
                  </div>
                </div>
                <div className='dc-articlesholder'>
                  <div className='row dc-articlesrow'>
                    {[...seances].reverse().map((seance, i) => (
                      <RendCard key={i} {...seance} />
                    ))}

                    <div className='col-12'>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='dc-haslayaout dc-footeraboutus dc-bgcolor'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div className='dc-widgetskills'>
                  <div className='dc-fwidgettitle'>
                    <h3>By Speciality</h3>
                  </div>
                  <ul className='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Allergy Specialist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Andrologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Anesthetist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Audiologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Dietitian/Nutritionist</a>
                    </li>
                    <li className='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div className='dc-widgetskill'>
                  <div className='dc-fwidgettitle'>
                    <h3>Doctors In US</h3>
                  </div>
                  <ul className='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Laproscopic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Oral And Maxillofacial Surgeon
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Orthopedic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Pediatric Cardiac Surgeon
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Pediatric Orthopedic Surgeon
                      </a>
                    </li>
                    <li className='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div className='dc-footercol dc-widgetcategories'>
                  <div className='dc-fwidgettitle'>
                    <h3>By Categories</h3>
                  </div>
                  <ul className='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Cosmetic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Eye Specialist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Gastroenterologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>General Physician</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>General Practitioner</a>
                    </li>
                    <li className='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div className='dc-widgetbylocation'>
                  <div className='dc-fwidgettitle'>
                    <h3>By Location</h3>
                  </div>
                  <ul className='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Switzerland</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Canada</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Germany</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>United Kingdom</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Japan</a>
                    </li>
                    <li className='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Seance
