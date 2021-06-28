/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Typist from 'react-typist'
import {faForward, faCheck} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './App.scss'
import 'react-typist/dist/Typist.css'
import Code from './components/Code'

const codeThemes = [
    {
        name: 'Darcula',
        id: 'darcula',
    },
    {
        name: 'Solarized Light',
        id: 'solarized-light',
    },
];

export default class App extends React.Component {
    state = {
        currentBlock: 0,
        currentTheme: codeThemes[0],
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
            cursor: {
                hideWhenDone: true,
            },
            onTypingDone: () => {
                this.nextBlockTimeout = setTimeout(() => {
                    this.setState(prevState => ({
                        currentBlock: prevState.currentBlock + 1,
                    }))
                }, 1000)
            }
        };

        return (
            <div className={['app', this.state.currentTheme.id].join(' ')}>
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

                    <a href="https://github.com/joelworsham" target="_blank" rel="noopener noreferrer"
                       className="widget-button">
                        <span className="text">GitHub</span>
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>

                    <a href="https://www.linkedin.com/in/joel-worsham-51158593/" rel="noopener noreferrer"
                       target="_blank"
                       className="widget-button">
                        <span className="text">LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>

                    <div className="widget"/>

                    <div style={{marginTop: 'auto'}}>
                        <div className="widget no-flex">
                            {codeThemes.map(theme => (
                                <button
                                    key={theme.id}
                                    className={['code-theme-selector', theme.id].join(' ')}
                                    type="button"
                                    title={`Switch to ${theme.name} theme`}
                                    onClick={() => this.setState({currentTheme: theme})}
                                >
                                    {theme.id === this.state.currentTheme.id && (
                                        <FontAwesomeIcon icon={faCheck}/>
                                    )}
                                    <span>{theme.name}</span>
                                    <span/>
                                </button>
                            ))}
                        </div>
                        <div className="widget">
                            Powered by React&nbsp;
                            <FontAwesomeIcon icon={faReact} size="2x" spin/>
                        </div>
                    </div>
                </aside>

                <div className="line-numbers">
                    {[...new Array(64).keys()].map(i => (
                        <span key={i}>{i + 1}</span>
                    ))}
                </div>

                <div className="code-window">
                    <TypistTag {...typistProps}>
                        <Code color="declaration">import</Code>
                        <Code>JoelWorsham</Code>
                        <Code color="declaration">from</Code>
                        <Code color="stringVal">'./lib/developers'</Code>

                    </TypistTag>

                    {this.state.currentBlock >= 1 && (
                        <TypistTag {...typistProps}>
                            <br/>
                            <Code color="declaration">const</Code>
                            <Code>contactInfo = {'{'}</Code>

                            <br/>
                            <Code color="propertyKey" indent={2} nospace>phone</Code>
                            <Code>:</Code>
                            <a href="tel:5177455884">
                                <Code color="stringVal" terminate=",">
                                    '517-745-5884'
                                </Code>
                            </a>

                            <br/>
                            <Code color="propertyKey" indent={2} nospace>email</Code>
                            <Code>:</Code>
                            <a href="mailto:joelworsham">
                                <Code color="stringVal" terminate=",">
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
                            <Code color="comment">{'/*'}</Code>
                            <br/>
                            <Code color="comment" indent={1}>
                                * Throughout the years, I have been able to learn so much about web and application
                                development.
                            </Code>

                            <br/>
                            <Code color="comment" indent={1}>
                                * More than anything else, I always seek work that challenges me to grow and
                                become a
                            </Code>

                            <br/>
                            <Code color="comment" indent={1}>
                                * continually more experienced developer. I thrive in my work and love every,
                                sometimes painful
                            </Code>

                            <br/>
                            <Code color="comment" indent={1}>
                                * (friday deployment painful), moment.
                            </Code>

                            <br/>
                            <Code color="comment" indent={1}>{'*/'}</Code>

                            <br/>
                            <Code color="declaration">const</Code>
                            <Code>getSkillsAndExperience = type => ({'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 3 && (
                        <TypistTag {...typistProps}>
                            <Code color="comment" indent={2}>
                                // Development is my primary focus. In addition to building websites and applications,
                                I’ve been
                            </Code>

                            <br/>
                            <Code color="comment" indent={2}>
                                // able to dive deeply into server architecture, development operations, and other
                                various backend
                            </Code>

                            <br/>
                            <Code color="comment" indent={2}>
                                // systems.
                            </Code>

                            <br/>
                            <Code color="propertyKey" indent={2} nospace>DEVELOPMENT</Code>
                            <Code>: [{'{'}</Code>

                            <br/>
                            <Code color="propertyKey" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="stringVal" terminate=",">Programming Languages</Code>

                            <br/>
                            <Code color="propertyKey" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="stringVal" indent={6} terminate=",">'JavaScript (ES6/7+)'</Code>
                            <Code color="stringVal" terminate=",">'HTML(5)'</Code>
                            <Code color="stringVal" terminate=",">'CSS(3)'</Code>
                            <Code color="stringVal" terminate=",">'SASS(SCSS)'</Code>
                            <Code color="stringVal" terminate=",">'PHP'</Code>
                            <Code color="stringVal" terminate=",">'JSON'</Code>
                            <Code color="stringVal" terminate=",">'YML'</Code>
                            <Code color="stringVal" terminate=",">'Bash/SSH'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}</Code>
                            <Code>{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 4 && (
                        <TypistTag {...typistProps}>
                            <Code color="propertyKey" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="stringVal" terminate=",">Frameworks and Technologies</Code>

                            <br/>
                            <Code color="propertyKey" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="stringVal" indent={6} terminate=",">'React'</Code>
                            <Code color="stringVal" terminate=",">'React Native'</Code>
                            <Code color="stringVal" terminate=",">'Redux'</Code>
                            <Code color="stringVal" terminate=",">'Node'</Code>
                            <Code color="stringVal" terminate=",">'Node'</Code>
                            <Code color="stringVal" terminate=",">'Webpack'</Code>
                            <Code color="stringVal" terminate=",">'Babel'</Code>
                            <Code color="stringVal" terminate=",">'SQL'</Code>
                            <Code color="stringVal" terminate=",">'Postgres'</Code>

                            <br/>
                            <Code color="stringVal" indent={6} terminate=",">'Vue'</Code>
                            <Code color="stringVal" terminate=",">'Vuex'</Code>
                            <Code color="stringVal" terminate=",">'Nuxt'</Code>
                            <Code color="stringVal" terminate=",">'Koa/Express'</Code>
                            <Code color="stringVal" terminate=",">'JSON'</Code>
                            <Code color="stringVal" terminate=",">'SPA'</Code>
                            <Code color="stringVal" terminate=",">'Jest'</Code>
                            <Code color="stringVal" terminate=",">'Selenium'</Code>
                            <Code color="stringVal" terminate=",">'Cypress'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}</Code>
                            <Code>{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 5 && (
                        <TypistTag {...typistProps}>
                            <Code color="propertyKey" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="stringVal" terminate=",">Tools, Applications, and Skills</Code>

                            <br/>
                            <Code color="propertyKey" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="stringVal" indent={6} terminate=",">'Git'</Code>
                            <Code color="stringVal" terminate=",">'Heroku'</Code>
                            <Code color="stringVal" terminate=",">'Jenkins'</Code>
                            <Code color="stringVal" terminate=",">'AWS'</Code>
                            <Code color="stringVal" terminate=",">'Architecting'</Code>
                            <Code color="stringVal" terminate=",">'Frameworking'</Code>

                            <br/>
                            <Code indent={4} terminate=",">]</Code>

                            <br/>
                            <Code indent={2} terminate=",">}]</Code>

                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 6 && (
                        <TypistTag {...typistProps}>
                            <Code color="comment" indent={2}>
                                // Though I do enjoy design and UX, at this point in my career, it mostly serves to
                            </Code>

                            <br/>
                            <Code color="comment" indent={2}>
                                // empower my ability to help build intuitive, user-friendly applications.
                            </Code>

                            <br/>
                            <Code color="stringVal" indent={2} nospace>'DESIGN/UX'</Code>
                            <Code>: [{'{'}</Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 7 && (
                        <TypistTag {...typistProps}>
                            <Code color="propertyKey" indent={4} nospace>category</Code>
                            <Code>:</Code>
                            <Code color="stringVal" terminate=",">'Skills and Experience'</Code>

                            <br/>
                            <Code color="propertyKey" indent={4} nospace>items</Code>
                            <Code nospace>: [</Code>

                            <br/>
                            <Code color="stringVal" indent={6} terminate=",">'UX Design'</Code>
                            <Code color="stringVal" terminate=",">'App/Web Design'</Code>
                            <Code color="stringVal" terminate=",">'Iconography'</Code>
                            <Code color="stringVal" terminate=",">'Branding'</Code>
                            <Code color="stringVal" terminate=",">'Prototyping'</Code>
                            <Code color="stringVal" terminate=",">'UX Research'</Code>

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
                            <Code color="declaration">const</Code>
                            <Code>workHistoryComponent = () => (</Code>

                            <br/>
                            <Code color="jsx" indent={2}>{'<'}section</Code>
                            <Code nospace>class=</Code>
                            <Code color="stringVal" nospace>"joel-work-history"</Code>
                            <Code color="jsx">></Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 9 && (
                        <TypistTag {...typistProps}>
                            <Code color="jsx" indent={4} nospace>{'<'}h2></Code>
                            <Code nospace>10up 2021-Present</Code>
                            <Code color="jsx">{'<'}/h2></Code>

                            <br/>
                            <Code color="jsx" indent={4} nospace>{'<'}p></Code>

                            <br/>
                            <Code indent={6}>
                                Building upon my successes at DMI and Eli Lilly, 10up was my next big leap into
                                delivering
                            </Code>

                            <br/>
                            <Code indent={6}>
                                cutting edge design systems for large-stake clients. Going back to my roots in WordPress
                                and PHP,
                            </Code>

                            <br/>
                            <Code indent={6}>
                                I was placed on a team of talented senior developers and designers to deliver a top-tier
                                web product
                            </Code>

                            <br/>
                            <Code indent={6}>
                                to one of the industry leading pharmaceutical providers, leveraging my speed and
                                efficiency in
                            </Code>

                            <br/>
                            <Code indent={6}>
                                the front-end web development ecosystem.
                            </Code>

                            <br/>
                            <Code color="jsx" indent={4} nospace>{'<'}/p></Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 10 && (
                        <TypistTag {...typistProps}>
                            <Code color="jsx" indent={4} nospace>{'<'}h2></Code>
                            <Code nospace>DMI 2018-2021</Code>
                            <Code color="jsx">{'<'}/h2></Code>

                            <br/>
                            <Code color="jsx" indent={4} nospace>{'<'}p></Code>

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
                            <Code color="jsx" indent={4} nospace>{'<'}/p></Code>
                        </TypistTag>
                    )}

                    {this.state.currentBlock >= 11 && (
                        <TypistTag {...{...typistProps, ...(this.state.currentBlock === 1000 ? {} : {onTypingDone: () => this.handleFinishTyping()})}}>
                            <br/>
                            <Code color="jsx" indent={4} nospace>{'<'}h2></Code>
                            <Code nospace>Real Big Marketing 2013-2018</Code>
                            <Code color="jsx">{'<'}/h2></Code>

                            <br/>
                            <Code color="jsx" indent={4}>{'<'}p></Code>

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
                            <Code color="jsx" indent={4} nospace>{'<'}/p></Code>

                            <br/>
                            <Code color="jsx" indent={2}>{'<'}/section></Code>

                            <br/>
                            <Code>)</Code>
                        </TypistTag>
                    )}
                </div>
            </div>
        );
    }
}
