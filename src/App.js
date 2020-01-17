import React from 'react'
import Typist from 'react-typist'
import {faForward} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './App.scss'
import Code from './components/Code'

export default class App extends React.Component {
    state = {
        currentBlock: 0,
    };

    handleFinishTyping() {
        if (this.nextBlockTimeout) clearTimeout(this.nextBlockTimeout);
        this.setState({currentBlock: 1000})
    }

    render() {
        const TypistTag = this.state.currentBlock === 1000 ? 'div' : Typist;

        const typistProps = this.state.currentBlock === 1000 ? {} : {
            avgTypingDelay: 20,
            stdTypingDelay: 25,
            onTypingDone: () => {
                this.nextBlockTimeout = setTimeout(() => {
                    this.setState(prevState => ({
                        currentBlock: prevState.currentBlock + 1,
                    }))
                }, 1000)
            }
        };

        return (
            <div className="app">
                <aside className="app-sidebar">
                    {this.state.currentBlock < 1000 && (
                        <div className="widget">
                            <button
                                type="button"
                                className="finish-typing"
                                onClick={() => this.handleFinishTyping()}
                            >
                                Skip <FontAwesomeIcon icon={faForward}/>
                            </button>
                        </div>
                    )}

                    <a href="https://github.com/joelworsham" target="_blank" className="widget-button">
                        <span className="text">GitHub</span>
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>

                    <a href="https://www.linkedin.com/in/joel-worsham-51158593/" target="_blank"
                       className="widget-button">
                        <span className="text">LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>

                    <div className="widget"/>

                    <div className="widget">
                        Powered by React&nbsp;
                        <FontAwesomeIcon icon={faReact} size="2x" spin/>
                    </div>
                </aside>

                <div className="line-numbers">
                    {[...new Array(64).keys()].map(i => (
                        <span key={i}>{i + 1}</span>
                    ))}
                </div>

                <div className="code-window">
                    <TypistTag {...typistProps}>
                        <Code color="orange">import</Code>
                        <Code>JoelWorsham</Code>
                        <Code color="orange">from</Code>
                        <Code color="green">'./lib/developers'</Code>

                    </TypistTag>

                    {this.state.currentBlock >= 1 && (
                        <TypistTag {...typistProps}>
                            <br/>
                            <Code color="orange">const</Code>
                            <Code>contactInfo = {'{'}</Code>

                            <br/>
                            <Code color="purple" indent={2} nospace>phone</Code>
                            <Code>:</Code>
                            <a href="tel:5177455884">
                                <Code color="green" terminate=",">
                                    '517-745-5884'
                                </Code>
                            </a>

                            <br/>
                            <Code color="purple" indent={2} nospace>email</Code>
                            <Code>:</Code>
                            <a href="mailto:joelworsham">
                                <Code color="green" terminate=",">
                                    'joelworsham@gmail.com'
                                </Code>
                            </a>

                            <br/>
                            <Code>{'}'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 2 && (
                        <TypistTag {...typistProps}>
                            <br/>
                            <Code color="gray">{'/*'}</Code>
                            <br/>
                            <Code color="gray" indent={1}>
                                * Throughout the years, I have been able to learn so much about web and application
                                development.
                            </Code>

                            <br/>
                            <Code color="gray" indent={1}>
                                * More than anything else, I always seek work that challenges me to grow and
                                become a
                            </Code>

                            <br/>
                            <Code color="gray" indent={1}>
                                * continually more experienced developer. I thrive in my work and love every,
                                sometimes painful
                            </Code>

                            <br/>
                            <Code color="gray" indent={1}>
                                * (friday deployment painful), moment.
                            </Code>

                            <br/>
                            <Code color="gray" indent={1}>{'*/'}</Code>

                            <br/>
                            <Code color="orange">const</Code>
                            <Code>getSkillsAndExperience = type => ({'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 3 && (
                        <TypistTag {...typistProps}>
                            <Code color="gray" indent={2}>
                                // Development is my primary focus. In addition to building websites and applications,
                                I’ve
                                been
                            </Code>

                            <br/>
                            <Code color="gray" indent={2}>
                                // able to dive deeply into server architecture, development operations, and other
                                various
                                backend
                            </Code>

                            <br/>
                            <Code color="gray" indent={2}>
                                // systems.
                            </Code>

                            <br/>
                            <Code color="purple" indent={2} nospace>DEVELOPMENT</Code>
                            <Code>: [{'{'}</Code>

                            <br/>
                            <Code color="purple" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="green" terminate=",">Programming Languages</Code>

                            <br/>
                            <Code color="purple" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="green" indent={6} terminate=",">'JavaScript (ES6/7+)'</Code>
                            <Code color="green" terminate=",">'HTML(5)'</Code>
                            <Code color="green" terminate=",">'CSS(3)'</Code>
                            <Code color="green" terminate=",">'SASS(SCSS)'</Code>
                            <Code color="green" terminate=",">'PHP'</Code>
                            <Code color="green" terminate=",">'JSON'</Code>
                            <Code color="green" terminate=",">'YML'</Code>
                            <Code color="green" terminate=",">'Bash/SSH'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}</Code>
                            <Code>{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 4 && (
                        <TypistTag {...typistProps}>
                            <Code color="purple" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="green" terminate=",">Frameworks and Technologies</Code>

                            <br/>
                            <Code color="purple" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="green" indent={6} terminate=",">'React'</Code>
                            <Code color="green" terminate=",">'React Native'</Code>
                            <Code color="green" terminate=",">'Redux'</Code>
                            <Code color="green" terminate=",">'Node'</Code>
                            <Code color="green" terminate=",">'Node'</Code>
                            <Code color="green" terminate=",">'Webpack'</Code>
                            <Code color="green" terminate=",">'Babel'</Code>
                            <Code color="green" terminate=",">'SQL'</Code>
                            <Code color="green" terminate=",">'Postgres'</Code>

                            <br/>
                            <Code color="green" indent={6} terminate=",">'Vue'</Code>
                            <Code color="green" terminate=",">'Vuex'</Code>
                            <Code color="green" terminate=",">'Nuxt'</Code>
                            <Code color="green" terminate=",">'Koa/Express'</Code>
                            <Code color="green" terminate=",">'JSON'</Code>
                            <Code color="green" terminate=",">'SPA'</Code>
                            <Code color="green" terminate=",">'Jest'</Code>
                            <Code color="green" terminate=",">'Selenium'</Code>
                            <Code color="green" terminate=",">'Cypress'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}</Code>
                            <Code>{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 5 && (
                        <TypistTag {...typistProps}>
                            <Code color="purple" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="green" terminate=",">Tools, Applications, and Skills</Code>

                            <br/>
                            <Code color="purple" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="green" indent={6} terminate=",">'Git'</Code>
                            <Code color="green" terminate=",">'Heroku'</Code>
                            <Code color="green" terminate=",">'Jenkins'</Code>
                            <Code color="green" terminate=",">'AWS'</Code>
                            <Code color="green" terminate=",">'Architecting'</Code>
                            <Code color="green" terminate=",">'Frameworking'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}]</Code>

                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 6 && (
                        <TypistTag {...typistProps}>
                            <Code color="gray" indent={2}>
                                // Though I do enjoy design and UX, at this point in my career, it mostly serves to
                            </Code>

                            <br/>
                            <Code color="gray" indent={2}>
                                // empower my ability to help build intuitive, user-friendly applications.
                            </Code>

                            <br/>
                            <Code color="green" indent={2} nospace>'DESIGN/UX'</Code>
                            <Code>: [{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 7 && (
                        <TypistTag {...typistProps}>
                            <Code color="purple" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="green" terminate=",">'Skills and Experience'</Code>

                            <br/>
                            <Code color="purple" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="green" indent={6} terminate=",">'UX Design'</Code>
                            <Code color="green" terminate=",">'App/Web Design'</Code>
                            <Code color="green" terminate=",">'Iconography'</Code>
                            <Code color="green" terminate=",">'Branding'</Code>
                            <Code color="green" terminate=",">'Prototyping'</Code>
                            <Code color="green" terminate=",">'UX Research'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}]</Code>

                            <br/>
                            <Code terminate=",">}[type])</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 8 && (
                        <TypistTag {...typistProps}>
                            <br/>
                            <Code color="orange">const</Code>
                            <Code>workHistoryComponent = () => (</Code>

                            <br/>
                            <Code color="yellow" indent={2}>{'<'}section</Code>
                            <Code nospace>class=</Code>
                            <Code color="green" nospace>"joel-work-history"</Code>
                            <Code color="yellow">></Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 9 && (
                        <TypistTag {...typistProps}>
                            <Code color="yellow" indent={4} nospace>{'<'}h2></Code>
                            <Code nospace>DMI 2018-Present</Code>
                            <Code color="yellow">{'<'}/h2></Code>

                            <br/>
                            <Code color="yellow" indent={4} nospace>{'<'}p></Code>

                            <br/>
                            <Code indent={6}>
                                Since working with DMI, my skillset, confidence, and abilities as a software engineer
                                have
                            </Code>

                            <br/>
                            <Code indent={6}>
                                skyrocketed. I’ve learned more since starting than I had previously. From entirely new
                                web
                            </Code>

                            <br/>
                            <Code indent={6}>
                                frameworks, to working with a home-brewed API and deployment system on dev-ops, it has
                                been
                            </Code>

                            <br/>
                            <Code indent={6}>
                                an amazing experience learning so much.
                            </Code>

                            <br/>
                            <Code color="yellow" indent={4} nospace>{'<'}/p></Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 10 && (
                        <TypistTag {...{...typistProps, ...(this.state.currentBlock === 1000 ? {} : {onTypingDone: () => this.handleFinishTyping()})}}>
                            <br/>
                            <Code color="yellow" indent={4} nospace>{'<'}h2></Code>
                            <Code nospace>Real Big Marketing 2013-2018</Code>
                            <Code color="yellow">{'<'}/h2></Code>

                            <br/>
                            <Code color="yellow" indent={4}>{'<'}p></Code>

                            <br/>
                            <Code indent={6}>
                                My first big step into the industry, RBM provided the opportunity to grow into an
                                experienced
                            </Code>

                            <br/>
                            <Code indent={6}>
                                web developer. Most of my days involved building websites and apps in PHP and
                                JavaScript. I
                            </Code>

                            <br/>
                            <Code indent={6}>
                                also learned and grew in my ability to scope projects and accurately determine the
                                client's
                            </Code>

                            <br/>
                            <Code indent={6}>
                                needs.
                            </Code>

                            <br/>
                            <Code color="yellow" indent={4} nospace>{'<'}/p></Code>

                            <br/>
                            <Code color="yellow" indent={2}>{'<'}/section></Code>

                            <br/>
                            <Code>)</Code>
                        </TypistTag>
                    )}
                </div>
            </div>
        );
    }
}
