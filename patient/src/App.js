import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Register from './components/register'
import Login from './components/login'
import Profile from './components/profile'
import BoardUser from './components/boardUser'
import BoardAnalyste from './components/boardAnalyste'
import BoardAdmin from './components/boardAdmin'
import Home from './components/home.cp'
import { logout } from './actions/auth'
import { clearMessage } from './actions/message'
import { history } from './helpers/history'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { processLogin } from './actions/auth'
//components
import Seance from './components/seance.cp'
import Rend from './components/rend.cp'
import AddRend from './components/doctors/add.cp'
import ShowRecommandations from './components/recommandation/list.cp'
import AddRecommandation from './components/recommandation/add.cp'
import EditRecommandation from './components/recommandation/edit.cp'
import ShowDoctorss from './components/doctors/doctorslist.cp'
import AddProduit from './components/produit/add.cp'
import EditProduit from './components/produit/edit.cp'
import ShowProduits from './components/produit/list.cp'
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const App = () => {
    const navigate = useNavigate()
    const form = useRef()
    const checkBtn = useRef()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message } = useSelector((state) => state.message)
  const [showAnalysteBoard, setShowAnalysteBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
    const onChangeLogin = (e) => {
      const login = e.target.value
      setLogin(login)
    }
    const onChangePassword = (e) => {
      const password = e.target.value
      setPassword(password)
    }
    
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()) // clear message when changing location
    })
  }, [dispatch])
  useEffect(() => {
    if (currentUser) {
      setShowAnalysteBoard(currentUser.roles.includes('ROLE_ANALYSTE'))
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'))
    }
  }, [currentUser])
  const logOut = () => {
    dispatch(logout())
      .then(() => {
        navigate('/')
        window.location.reload()
      })
    
  }
  return (
    <>
      <div className='preloader-outer'>
        <div className='wt-preloader-holder'>
          <div className='wt-loader'></div>
        </div>
      </div>
      <div id='dc-wrapper' className='dc-wrapper dc-haslayout'>
        <header id='dc-header' className='dc-header dc-haslayout'>
          <div className='dc-topbar'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                  <div className='dc-helpnum'>
                    <span>Emergency Help!</span>
                    <a href='tel:123456789'>+216-58048200</a>
                  </div>
                  <div className='dc-rightarea'>
                    <ul className='dc-simplesocialicons dc-socialiconsborder'>
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
                      <li className='dc-googleplus'>
                        <a href='javascript:void(0);'>
                          <i className='fab fa-google-plus-g'></i>
                        </a>
                      </li>
                      <li className='dc-rss'>
                        <a href='javascript:void(0);'>
                          <i className='fas fa-rss'></i>
                        </a>
                      </li>
                      <li className='dc-youtube'>
                        <a href='javascript:void(0);'>
                          <i className='fab fa-youtube'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dc-navigationarea'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                  <strong className='dc-logo'>
                    <a>
                      <Link to={'/'}>
                        <img src='assets/images/logo.png' alt='LeKiné' />
                        LeKiné
                      </Link>
                    </a>
                  </strong>
                  <div className='dc-rightarea'>
                    <nav id='dc-nav' className='dc-nav navbar-expand-lg'>
                      <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                      >
                        <i className='lnr lnr-menu'></i>
                      </button>
                      <div
                        className='collapse navbar-collapse dc-navigation'
                        id='navbarNav'
                      >
                        <ul className='navbar-nav'>
                          <li className='menu-item-has-children page_item_has_children '>
                            <a href='javascript:void(0);'>Health Forum</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='healthforum.html'>Health Forum</a>
                              </li>
                              <li>
                                <a href='healthforumanswer.html'>
                                  Health Forum Answer
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='menu-item-has-children page_item_has_children'>
                            <a href='javascript:void(0);'>How It Works?</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='howitsworkv1.html'>How It Works V1</a>
                              </li>
                              <li>
                                <a href='howitsworkv2.html'>How It Works V2</a>
                              </li>
                            </ul>
                          </li>
                          <li className='menu-item-has-children page_item_has_children dc-navactive'>
                            <a href='javascript:void(0);'>Pages</a>
                            <ul className='sub-menu'>
                              <li className='menu-item-has-children page_item_has_children dc-notificationicon'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Home</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='index.html'>Home Version 1</a>
                                  </li>
                                  <li className='dc-newnoti'>
                                    <a href='indexv2.html'>Home Version 2</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Article</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='blog-list.html'>Article List</a>
                                  </li>
                                  <li>
                                    <a href='blog-grid.html'>Article Grid</a>
                                  </li>
                                  <li>
                                    <a href='blog-single.html'>
                                      Article Single
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Search Result</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='searchresultlistv1.html'>
                                      Search Result List V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='searchresultlistv2.html'>
                                      Search Result List V2
                                    </a>
                                  </li>
                                  <li>
                                    <a href='searchresultgrid.html'>
                                      Search Result Grid
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a>
                                  {' '}
                                  <Link to={'/doctors'}>Doctors</Link>
                                </a>
                              </li>
                              <li>
                                <a>
                                  {' '}
                                  <Link to={'/rends'}>Votre Rendez-vous</Link>
                                </a>
                              </li>
                              <li>
                                <a>
                                  {' '}
                                  <Link to={'/seances'}>Vous Seances</Link>
                                </a>
                              </li>
                          
                              <li>
                                <a href='about.html'>About</a>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Contact Us</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='contactusvone.html'>
                                      Contact Us V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='contactvtwo.html'>Contact Us V2</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Coming Soon</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='commingsoonV1.html'>
                                      Comming Soon V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='commingsoonV2.html'>
                                      Comming Soon V2
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='404page.html'>404page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div className='dc-loginarea'>
                      {currentUser ? (
                        <div className='dc-loginoption'>
                          <a href='/' className='dc-loginbtn' onClick={logOut}>
                            {' '}
                            Logout
                          </a>
                        </div>
                      ) : (
                        <div>
                          <a className='dc-loginbtn'>
                            {' '}
                            <Link to={'/login'}>Login</Link>
                          </a>{' '}
                          <a href='' className='dc-btn'>
                            {' '}
                            <Link to={'/register'}>Join Now </Link>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='dc-navigationarea'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                  <strong className='dc-logo'>
                    <a href=''>
                      <Link to={'/'}>
                        {' '}
                        <img
                          src='assets/images/logo.png'
                          alt='company logo here'
                        />
                      </Link>
                    </a>
                  </strong>
                  <div className='dc-rightarea'>
                    <nav id='dc-nav' className='dc-nav navbar-expand-lg'>
                      <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                      >
                        <i className='lnr lnr-menu'></i>
                      </button>
                      <div
                        className='collapse navbar-collapse dc-navigation'
                        id='navbarNav'
                      >
                        <ul className='navbar-nav'>
                          <li className='menu-item-has-children page_item_has_children '>
                            <a href='javascript:void(0);'>Health Forum</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='healthforum.html'>Health Forum</a>
                              </li>
                              <li>
                                <a href='healthforumanswer.html'>
                                  Health Forum Answer
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='menu-item-has-children page_item_has_children'>
                            <a href='javascript:void(0);'>How It Works?</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='howitsworkv1.html'>How It Works V1</a>
                              </li>
                              <li>
                                <a href='howitsworkv2.html'>How It Works V2</a>
                              </li>
                            </ul>
                          </li>
                          <li className='menu-item-has-children page_item_has_children dc-navactive'>
                            <a href='javascript:void(0);'>Pages</a>
                            <ul className='sub-menu'>
                              <li className='menu-item-has-children page_item_has_children dc-notificationicon'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Home</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href=''>Home Version 1</a>
                                  </li>
                                  <li className='dc-newnoti'>
                                    <a href='indexv2.html'>Home Version 2</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Article</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='blog-list.html'>Article List</a>
                                  </li>
                                  <li>
                                    <a href='blog-grid.html'>Article Grid</a>
                                  </li>
                                  <li>
                                    <a href='blog-single.html'>
                                      Article Single
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Search Result</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='searchresultlistv1.html'>
                                      Search Result List V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='searchresultlistv2.html'>
                                      Search Result List V2
                                    </a>
                                  </li>
                                  <li>
                                    <a href='searchresultgrid.html'>
                                      Search Result Grid
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to={'/doctors'}>
                                  <a href=''>Doctors</a>
                                </Link>
                              </li>
                              <li>
                                <a href='hospitalsingle.html'>
                                  Hospital Single
                                </a>
                              </li>
                              <li>
                                <a href='about.html'>About</a>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Contact Us</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='contactusvone.html'>
                                      Contact Us V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='contactvtwo.html'>Contact Us V2</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='menu-item-has-children page_item_has_children'>
                                <span className='dc-dropdowarrow'>
                                  <i className='lnr lnr-chevron-right'></i>
                                </span>
                                <a href='javascript:void(0);'>Coming Soon</a>
                                <ul className='sub-menu'>
                                  <li>
                                    <a href='commingsoonV1.html'>
                                      Comming Soon V1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='commingsoonV2.html'>
                                      Comming Soon V2
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='404page.html'>404page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div className='dc-loginarea'>
                      <div className='dc-loginoption'>
                        <a
                          href='javascript:void(0);'
                          id='dc-loginbtn'
                          className='dc-loginbtn'
                        >
                          Login
                        </a>
                        <div className='dc-loginformhold'>
                          <div className='dc-loginheader'>
                            <span>Login</span>
                            <a href='javascript:;'>
                              <i className='fa fa-times'></i>
                            </a>
                          </div>
                          <form className='dc-formtheme dc-loginform do-login-form'>
                            <fieldset>
                              <div className='form-group'>
                                <input
                                  type='text'
                                  name='name'
                                  className='form-control'
                                  placeholder='Username'
                                />
                              </div>
                              <div className='form-group'>
                                <input
                                  type='password'
                                  name='password'
                                  className='form-control'
                                  placeholder='Password'
                                />
                              </div>
                              <div className='dc-logininfo'>
                                <span className='dc-checkbox'>
                                  <input
                                    id='dc-login'
                                    type='checkbox'
                                    name='rememberme'
                                  />
                                  <label htmlFor='dc-login'>
                                    Keep me logged in
                                  </label>
                                </span>
                                <a
                                  href='javascript:;'
                                  className='dc-btn do-login-button'
                                >
                                  Login
                                </a>
                              </div>
                            </fieldset>
                            <div className='dc-loginfooterinfo'>
                              <a href='javascript:;' className='dc-forgot-password'>
                                Forgot password?
                              </a>
                              <a href='javascript:void(0);'>Create account</a>
                            </div>
                          </form>
                          <form className='dc-formtheme dc-loginform do-forgot-password-form dc-hide-form'>
                            <fieldset>
                              <div className='form-group'>
                                <input
                                  type='email'
                                  name='email'
                                  className='form-control get_password'
                                  placeholder='Email'
                                />
                              </div>

                              <div className='dc-logininfo'>
                                <a
                                  href='javascript:;'
                                  className='dc-btn do-get-password'
                                >
                                  Get Pasword
                                </a>
                              </div>
                            </fieldset>
                            <div className='dc-loginfooterinfo'>
                              <a
                                href='javascript:void(0);'
                                className='dc-show-login'
                              >
                                Login
                              </a>
                              <a href='javascript:void(0);'>Create account</a>
                            </div>
                          </form>
                        </div>
                      </div>{' '}
                      <Link to={'/register'}>
                        <a href='register.html' className='dc-btn'>
                          Join Now
                        </a>{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/recommandations'
            element={<ShowRecommandations />}
          />

          <Route
            exact
            path='/addRecommandation'
            element={<AddRecommandation />}
          />
          <Route
            exact
            path='/editRecommandation/:id'
            element={<EditRecommandation />}
          />
          <Route exact path='/seances' element={<Seance />} />
          <Route exact path='/rends' element={<Rend />} />
          <Route exact path='/doctors' element={<ShowDoctorss />} />
          <Route exact path='/addrend/:idkk' element={<AddRend />} />
          <Route exact path='/produits' element={<ShowProduits />} />
          <Route exact path='/addProduit' element={<AddProduit />} />
          <Route exact path='/editProduit/:id' element={<EditProduit />} />

          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/user' element={<BoardUser />} />
          <Route path='/analyste' element={<BoardAnalyste />} />
          <Route path='/admin' element={<BoardAdmin />} />
        </Routes>

        <footer id='dc-footer' className='dc-footer dc-haslayout'>
          <div className='dc-footertopbar'>
            <div className='container'>
              <div className='row justify-content-center align-self-center'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8 push-lg-2'>
                  <div className='dc-footer-call-email'>
                    <div className='dc-callinfoholder'>
                      <figure className='dc-callinfoimg'>
                        <img
                          src='assets/images/footer/img-01.png'
                          alt='img description'
                        />
                      </figure>
                      <div className='dc-callinfocontent'>
                        <h3>
                          <span>Emergency Call</span>{' '}
                          <a href='javascript:void(0);'>+216-58048200</a>
                        </h3>
                      </div>
                    </div>
                    <div className='dc-callinfoholder dc-mailinfoholder'>
                      <figure className='dc-callinfoimg'>
                        <img
                          src='assets/images/footer/img-02.png'
                          alt='img description'
                        />
                      </figure>
                      <div className='dc-callinfocontent'>
                        <h3>
                          <span>24/7 Email Support</span>{' '}
                          <a href='mailto:Info@domain.com'>lekiné@gmail.com</a>
                        </h3>
                      </div>
                    </div>
                    <span className='dc-or-text'>- OR -</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dc-fthreecolumns'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 float-left'>
                  <div className='dc-fcol dc-widgetcontactus'>
                    <strong className='dc-logofooter'>
                      <a href=''>
                        <Link to={'/'}>
                          <img
                            src='assets/images/logo.png'
                            alt='company logo here'
                          />
                        </Link>
                      </a>
                    </strong>
                    <div className='dc-footercontent'>
                      <div className='dc-description'>
                        <p>
                          Consectetur adipisicing elit, sed dot eiusd tempor
                          incididunt ailabor dolore magna dolore magnam aliquam
                          quaerat voluptatem{' '}
                          <a
                            href='javascript:void(0)'
                            className='dc-detailsinfo dc-detailsinfofooter'
                          >
                            ...
                          </a>
                        </p>
                      </div>
                      <ul className='dc-footercontactus'>
                        <li>
                          <address>
                            <i className='lnr lnr-location'></i> 123 New Street,
                            Melbourne location Australia 54214
                          </address>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            <i className='lnr lnr-envelope'></i>{' '}
                            info@domainurl.com
                          </a>
                        </li>
                        <li>
                          <span>
                            <i className='lnr lnr-phone-handset'></i> (0800)
                            1234 567891
                          </span>
                        </li>
                      </ul>
                      <div className='dc-fsocialicon'>
                        <ul className='dc-simplesocialicons'>
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
                          <li className='dc-googleplus'>
                            <a href='javascript:void(0);'>
                              <i className='fab fa-google-plus-g'></i>
                            </a>
                          </li>
                          <li className='dc-rss'>
                            <a href='javascript:void(0);'>
                              <i className='fas fa-rss'></i>
                            </a>
                          </li>
                          <li className='dc-youtube'>
                            <a href='javascript:void(0);'>
                              <i className='fab fa-youtube'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3 float-left'>
                  <div className='dc-fcol dc-flatestad'>
                    <div className='dc-ftitle'>
                      <h3>Twitter Live Feed</h3>
                    </div>
                    <div className='dc-footercontent'>
                      <ul className='dc-livefeeddetails'>
                        <li>
                          <figure className='dc-latestadimg'>
                            <img
                              src='assets/images/footer/img-03.png'
                              alt='img description'
                            />
                          </figure>
                          <div className='dc-latestadcontent'>
                            <p>
                              Designer Square <em>@Tingdong</em>{' '}
                              <span>Consectetur</span>{' '}
                              <a href='javascript:void(0);'>#adipisicing</a>{' '}
                              <span>elitene eiusmod incididunt.</span>
                            </p>
                            <time dateTime='2018-12-12'>
                              11:39 AM - June 27, 2018
                            </time>
                          </div>
                        </li>
                        <li>
                          <figure className='dc-latestadimg'>
                            <img
                              src='assets/images/footer/img-04.png'
                              alt='img description'
                            />
                          </figure>
                          <div className='dc-latestadcontent'>
                            <p>
                              Admonster <em>@admonster772</em>{' '}
                              <span>Eliten sedat mod</span>{' '}
                              <a href='javascript:void(0);'>@tempoer</a>{' '}
                              <span>incididunt</span>{' '}
                              <a href='javascript:void(0);'>#utaorne etia</a>
                            </p>
                            <time dateTime='2018-12-12'>
                              11:39 AM - June 27, 2018
                            </time>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3 float-left'>
                  <div className='dc-fcol dc-newsletterholder'>
                    <div className='dc-ftitle'>
                      <h3>Twitter Live Feed</h3>
                    </div>
                    <div className='dc-footercontent dc-newsletterholder'>
                      <div className='dc-description'>
                        <p>
                          A dipisicing elit sed dotem eiusmou tempor incididunt
                          ut labore.
                        </p>
                      </div>
                      <form className='dc-formtheme dc-formnewsletter'>
                        <fieldset>
                          <div className='form-group'>
                            <input
                              type='email'
                              name='email'
                              defaultValue=''
                              className='form-control'
                              placeholder='Enter Your Email'
                              required=''
                            />
                            <button type='submit'>
                              <i className='lnr lnr-arrow-right'></i>
                            </button>
                          </div>
                        </fieldset>
                      </form>
                      <div className='dc-footerapps'>
                        <div className='dc-ftitle'>
                          <h3>Download Mobile App</h3>
                        </div>
                        <ul className='dc-btnapps'>
                          <li>
                            <a href='javascript:void(0)'>
                              <img
                                src='assets/images/footer/img-05.png'
                                alt='img description'
                              />
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <img
                                src='assets/images/footer/img-06.png'
                                alt='img description'
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dc-footerbottom'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-12'>
                  <p className='dc-copyright'>
                    Copyrights © 2019 by <span>DocList.</span> All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default App
