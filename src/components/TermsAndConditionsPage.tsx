import { useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, Scale, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const TermsAndConditionsPage = () => {
  useEffect(() => {
    document.title = "Winbox Terms and Conditions - Official User Agreement & Regulations";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Header */}
      <div className="bg-sky-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-gold-outline">Terms and Conditions</h1>
            <p className="text-sky-200 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Please read these terms and conditions carefully before participating in any games or services on Winbox.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="mb-8 text-xs text-slate-400 uppercase tracking-widest font-black flex items-center gap-2">
          <Link to="/" className="hover:text-sky-500 transition-colors">Winbox</Link>
          <span>&gt;</span>
          <span className="text-slate-600">Terms and Conditions</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12 text-slate-700 leading-relaxed border border-slate-100"
        >
          {/* Introduction */}
          <div className="prose prose-slate max-w-none">
            <p className="text-base md:text-lg font-medium text-slate-900">
              This page contains information explaining your rights in accessing and using the official <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> website.
              The Terms and Conditions relating to the games and promotions available on the Site are updated periodically, which are incorporated herein by reference.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">1</span>
              Definitions
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p>
                <strong>1.1</strong> The following provisions define the terms and conditions that govern your access and participation in any "play for real" services provided by Winbox or collectively referred to as "Winbox", "we", "our" or "us" as the context requires. These provisions are intended to be read in conjunction with "Betting Rules", "Privacy Policy" and any other Terms and Conditions governing the use of the Services and Website(s) and the Information comprised therein (collectively these "Terms and Conditions").
              </p>
              <p>
                <strong>1.2</strong> "Games" means internet gaming system accessible and/or offered on the Site; "Betting" or "bet(s)" for the purpose of these Terms and Conditions include, without limitation, wagering, gaming and gambling conducted in relation to any and/or all of the Service(s) offered on the Website(s);
                <br />
                "Device(s)" mean any application access devices, including but not limited to personal computers, laptops, mobile phones, personal digital assistants, PDA phones, hand-held devices employed for the use of the Website(s) and Services;
                <br />
                "Software" means any computer programme, data file or any other content (including any user information relating to the foregoing) that is required to be installed on your Device to enable you to use and access the Website(s) and Services;
                <br />
                "Sportsbook" means the internet gaming system accessible and/or offered at the part of the Website and all related services and online gaming activities;
                <br />
                "Services" means the Software and Games together.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">2</span>
              Use of Site
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>2.1</strong> You can only play the Games for money if you are:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i.a. 18 years of age or over; and</li>
                <li>i.b. Have reached the age at which you are legally entitled to play the Games in whichever country you access our site.</li>
                <li>ii. You are not allowed to register Winbox on the Website and use our services if you are a resident of Aruba, Australia, Bonaire, Curacao, France, Iran, Iraq, Netherlands, Saba, Spain, St Maarten, Statia, U.S.A or the U.S.A dependencies, United Kingdom. We reserve the right to refuse customers from any other countries over and above the aforementioned jurisdictions at our own discretion.</li>
              </ul>
              
              <p><strong>2.2</strong> If you are not entitled, Winbox reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. immediately prevent your participation in Games and withdraw your account</li>
                <li>ii. report you to the relevant authorities.</li>
              </ul>

              <p><strong>2.3</strong> Clicking on the relevant "JOIN AND REGISTER" button during your registration, you acknowledge and accept that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. you are at least 18 years of age;</li>
                <li>ii. you have read, fully understood and accepted these Terms and Conditions; and</li>
                <li>iii. these Terms and Conditions constitute a legally binding agreement ("Agreement") between you and Winbox regarding the use of the Services.</li>
              </ul>

              <p><strong>2.4</strong> You cannot transfer, sell, or pledge Your Account to another person. This prohibition includes the transfer of any assets of value of any kind, including but not limited to ownership of accounts, winnings, deposits, bets, rights and/or claims in connection with these assets, legal, commercial, or otherwise. The prohibition on said transfers also includes however is not limited to the encumbrance, pledging, assigning, usufruct, trading, brokering, hypothecation and/or gifting in cooperation with a fiduciary or any other third party, company, natural or legal individual, foundation and/or association in any way shape or form</p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">3</span>
              Modification
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>3.1</strong> We reserve the right to amend, update and modify these Terms and Conditions without prior notice, in our sole discretion. The amended, updated or modified Terms and Conditions shall be effective upon publication on the Website(s). Continued use of, access to and participation in the Services on or through our Website(s) and Device(s) after such publication constitute your acceptance to the modified or updated Terms and Conditions.</p>
              <p><strong>3.2</strong> You acknowledge and agree that it is your sole responsibility to check for any amendments, updates and/or modifications. Winbox shall not constitute an obligation to notify you of such amendments, updates and/or modifications.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">4</span>
              Intellectual Property
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>4.1</strong> The information, material and data provided or made available to you on the Website(s), Services and/or in any other form including, without limitation, marketing programmes and materials, results, statistics, sporting data and fixture lists, odds and betting figures, text, graphics, video and audio content (the "Information"), belong to Winbox and our licensors and are meant for your personal and non-commercial use only.</p>
              <p><strong>4.2</strong> You may not in any way or by any means adapt, copy, modify, reproduce, store, distribute, display, publish, transmit, sell, rent, lease or license or otherwise make the Information available to any other person, website, or media without our prior consent.</p>
              <p><strong>4.3</strong> The Software, Services and the Information provided on the Website(s) are protected by copyright, trademarks and other forms of intellectual and proprietary rights. All rights, title and interest in and to the Software, Services and Information on the Website(s) are owned by, licensed to and/or controlled by Winbox and/or our licensors. You acknowledge that you do not acquire any rights, interests, or licences to the Software, Services and the Information through your use of the Website(s).</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">5</span>
              Conditions of Use
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p>As a condition of use of the Services, you warrant and undertake that you shall not use or access the Website(s), Services, Software and/or the Information for any purpose that is unlawful under any law that is applicable to you or that is prohibited by and/or in breach of these Terms and Conditions. In particular (and in addition to all other representations and warranties set out in these Terms and Conditions), you warrant and undertake as a condition of your use of the Services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. that you are acting on your own behalf and in your own personal capacity and not on behalf of another person;</li>
                <li>ii. that you are not restricted by limited legal capacity;</li>
                <li>iii. that you are not diagnosed or classified as a compulsive gambler;</li>
                <li>iv. that you are of the legal age of 18 and above;</li>
                <li>v. that you are fully aware of the risk of losing money in the course of using the Services;</li>
                <li>vi. that you are not using or depositing money which originate from illegal or unauthorised activities;</li>
                <li>vii. that you are not conducting criminal or otherwise unlawful or unauthorised activities and/or intending to use your account opened with us in connection with such activities;</li>
                <li>viii. that you shall not allow other persons to use your account for any criminal or otherwise unlawful activities including, without limitation, money laundering, under any law applicable to you or us;</li>
                <li>ix. to keep your username, account number and password secure, confidential and protected against unauthorised access or use and to ensure that you notify us immediately if you misplace, forget or lose your account name or password;</li>
                <li>x. to be solely responsible for any and all activities that occur under the access to and use of the Services on and through the Website(s) and/or Device(s) under your username, account number and password regardless of whether such access and/or use was authorised by or known to you or not;</li>
                <li>xi. not to use the Website(s), Device(s), Software or the Information in any way which interferes the operational performance of the Services and the Website(s) to other users;</li>
                <li>xii. not to solicit or in any manner seek to obtain any information relating to other users;</li>
                <li>xiii. not to upload or distribute any program, file or data that contain viruses and may affect the operational performance of the Device(s), Software, Services and/or Website(s);</li>
                <li>xiv. that your access to or use of the Services and Website(s) is not illegal or prohibited by laws or contractual obligations that are applicable to you from which you are currently accessing the Website(s) or using the Device(s);</li>
                <li>xv. not to post or transmit to the Website(s) and/or to the Device(s) or to any other users, any unlawful, harassing, abusive, threatening, defamatory, obscene, indecent, inflammatory, racially or ethnically objectionable, pornographic or profane material, or any that could be considered a criminal offence;</li>
                <li>xvi. that you are not an officer, director, employee, affiliate or agent of Winbox or any company related to Winbox, or a relative or housemate of any of the foregoing.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">6</span>
              Registration and Membership
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>6.1</strong> In order to bet with Winbox, you must complete the application for account opening and membership. We reserve the right to reject your Membership Application without reference to you or assigning any reason whatsoever.</p>
              <p><strong>6.2</strong> You represent and undertake that all information supplied when registering and completing the Membership Application is accurate, true and complete in all respects including, your name, sources of funds (including the relevant bank accounts and card numbers) and residential address.</p>
              <p><strong>6.3</strong> We will take reasonable and appropriate measures to ensure that any personal information disclosed to us shall remain confidential. We will not report or disclose your personal data or betting information unless compelled to do so by any applicable laws and regulations.</p>
              <p><strong>6.4</strong> It is your sole responsibility to keep your personal information confidential. We reserve the right to disclose and transfer your personal data to our respective payment settlement service providers and financial institutions to the extent necessary for the completion of payments.</p>
              <p><strong>6.5</strong> It is your sole responsibility to ensure that the laws applicable to you do not prohibit you from using and accessing the Website(s) and/or using and participating in the Services.</p>
              <p><strong>6.6</strong> We reserve the right to request further evidence of identification and age from you to verify your Membership Application (e.g. valid picture identification). If there is any change to your information details, you shall notify us of the relevant change immediately.</p>
              <p><strong>6.7</strong> We reserve the right to confirm your name and address by post. Winbox may, at our discretion, undertake additional security checks against any information that you provide. By agreeing to these Terms and Conditions you give consent for Winbox to access, use and store any identification verification or checks that may be made against you.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">7</span>
              Placement of Bets
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>7.1</strong> We accept bets for games that are advertised on the Website(s) and/or through the Device(s). All such bets are subject to the Betting Rules applicable to each event or game, and to these Terms and Conditions. If a manifest error or mistake occurs or an incorrect participant is quoted for any event, all bets placed on that event shall be void. In the event of any malfunction to the Winbox Company gaming system, Winbox reserves the right to void any and all bets placed.</p>
              <p><strong>7.2</strong> Notwithstanding any other provision in these Terms and Conditions, Winbox reserves the right, in our absolute discretion, to decline all, or part, of any bet placed without providing any reason whatsoever.</p>
              <p><strong>7.3</strong> We only accept bets made through the internet in compliance with these Terms and Conditions. Bets are not accepted in any other form (whether by post, email, fax or otherwise) and will be void regardless of the outcome.</p>
              <p><strong>7.4</strong> Winbox reserves the right to suspend and or close a customer's account at any time if it is believed that you have breached any of these Terms or have acted in a manner of cheating, hacking, attacking, manipulating or damaging the normal betting spirits. Any winnings and/or payout including balance in the account shall be deemed forfeited and invalid.</p>
              <p><strong>7.5</strong> Any forms of "abnormal bets" including the use of artificial intelligence or "bots" on the Internet will be VOID without prior notification. Any attempt or actual use of artificial intelligence by members will lead to termination of their account.</p>
              <p><strong>7.6</strong> Bets will be validly placed if your username and password have been entered correctly, provided if there are sufficient funds in your account. It is your sole responsibility to ensure that the details of your bets are correct. Once your bets have been placed and confirmed by us, they may not be cancelled, revoked or changed.</p>
              <p><strong>7.7</strong> You are responsible and liable for all activities and transactions that take place through the use of any of the following:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. your name;</li>
                <li>ii. your account number;</li>
                <li>iii. your username and password</li>
              </ul>
              <p><strong>7.8</strong> Bets will be deemed valid and accepted by Winbox when a transaction ID is displayed on your screen and duly reflected in your transaction history.</p>
              <p><strong>7.9</strong> No betting is permitted after the commencement of an event and/or where the outcome of an event is known at the time of placement of your bet. If any event is erroneously left open for betting after the commencement of the event and/or where the outcome of an event is known, Winbox reserves the right to decline or void such bets placed. If for any reason a bet is inadvertently accepted by Winbox after an event or match has commenced, Winbox reserves the right to cancel and void such bet. Acceptance of any bet shall be at the sole discretion of Winbox.</p>
              <p><strong>7.10</strong> Unless stated otherwise, the result of a match or event will be determined on the day of its conclusion for betting purposes. The winner of an event or game will be determined on the date of the event's conclusion according to the Betting Rules.</p>
              <p><strong>7.11</strong> Winbox does not recognise suspended games, protests or overturned decisions for betting purposes.</p>
              <p><strong>7.12</strong> You acknowledge that any and all odds, lines and handicaps are subject to fluctuation without notice, and the foregoing will become fixed only at the time of acceptance of the bet by us. Where a manifest error, mistake or system failure results in an incorrect odd, line or handicap taken in a bet, Winbox may in our absolute discretion (but shall not be obliged to) make reasonable efforts to contact you to allow the choice of placing another bet at the correct odds, lines and handicaps.</p>
              <p><strong>7.13</strong> We will not accept any simultaneously placed bets on one event from you. In respect of any bet and the associated transactions therewith, the decision Winbox is final and conclusive.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">8</span>
              Software License
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>8.1</strong> You hereby acknowledge and agree that the Software that is made accessible to you is the property of The Company and that you do not gain any rights to such Software whatsoever. You may not in any way or by any means adapt, copy, modify, reproduce, store, distribute, display, publicly perform, broadcast, publish, transmit, sell, rent, lease or license or otherwise communicate or make available such Software to any other person, website or on any other media and/or device.</p>
              <p><strong>8.2</strong> Winbox grants to you a personal, non-exclusive, non-transferable and revocable licence to install and use the Software on your Device(s) (the "Licence") PROVIDED THAT such installation and use is made through a Device of which you are the primary user.</p>
              <p><strong>8.3</strong> The Software is licensed and distributed by Winbox solely for the purpose of enabling users of the Software to fully access and utilise the Services.</p>
              <p><strong>8.4</strong> You are not allowed to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. install or load the Software onto a server of other networked device;</li>
                <li>ii. copy, distribute, transfer, assign the Software to any other person;</li>
                <li>iii. rent, lease, sub-licence or transfer the Software to any third party;</li>
                <li>iv. create or provide any means through which the Software may be used by others;</li>
                <li>v. translate, decompile, disassemble, modify, create derivative works based on the Software; or</li>
                <li>vi. use the Software in a manner prohibited by applicable laws or regulations.</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">9</span>
              Settlement of Transactions
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>9.1</strong> Winbox reserves the right not to settle a transaction in the event of discrepancies between the bank account and registered name.</p>
              <p><strong>9.2</strong> Your winnings are exclusive of bet amount and this should be considered when placing your bet.</p>
              <p><strong>9.3</strong> Winbox shall not be responsible or liable to you for any funds credited to an account in error, and Winbox reserves the right to void any transactions involving such funds. Should funds be credited to your account in error, it is your responsibility to inform Winbox immediately.</p>
              <p><strong>9.4</strong> Payment of any taxes, fees, charges or levies that may apply to your winnings under any applicable laws shall be your sole responsibility.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">10</span>
              Collection of Winnings
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>10.1</strong> Your winnings from settled bets are credited to your account and shall be withdrawn in accordance with our Terms and Conditions.</p>
              <p><strong>10.2</strong> We will not release your funds under any circumstances if the full value of your deposit is not played through in full.</p>
              <p><strong>10.3</strong> Withdrawals of money from your account may only be made in the same currency in which deposits were made.</p>
              <p><strong>10.4</strong> The bank account used for the original placement of the deposit must be the same as the name of the registered account.</p>
              <p><strong>10.5</strong> Winbox reserves the right to make a charge to your account to cover all reasonable cost relating to both the deposit and withdrawal.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">11</span>
              Promotions
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>11.1</strong> All the promotion in Winbox is not allowed for multiple accounts, if there is any collusion or usage of multiple account, all bonus and winning amount will be confiscated.</p>
              <p><strong>11.2</strong> Turnover on all types of non-live table games (e.g. Blackjack, Video Poker, Craps, American Roulette, Baccarat and other non-live table games) and non-slot games, will not count towards this turnover requirement unless SPECIFICALLY stated.</p>
              <p><strong>11.3</strong> Winbox will only calculate the amount of bets that have been settled and with the result of winning or losses as effective turnover.</p>
              <p><strong>11.4</strong> The required turnover subjected to all bonuses are not counted as effective rebate.</p>
              <p><strong>11.5</strong> Given bonuses are only valid for thirty (30) days, starting from the date they are issued, unless otherwise stated in the bonus’ terms and conditions. If a player fails to make the prerequisite value of wagers before the expiration, the bonus funds and money won using money bonus funds will be removed from the player’s account.</p>
              <p><strong>11.6</strong> Winbox reserves the right to decide unilaterally to execute and, at any time without prior notice, to modify, change, stop, cancel and/or invalidate the promotion.</p>
              <p><strong>11.7</strong> All promotions or special offers introduced are subjected to these Terms and Conditions. Winbox reserves the right to suspend, withdraw or modify such any promotions at any time.</p>
              <p><strong>11.8</strong> In the event that Winbox believes a user is abusing or attempting to abuse a promotion, Winbox may, at our sole discretion, block, deny, suspend, withhold or withdraw any user from the promotion.</p>
              <p><strong>11.9</strong> Winbox reserves the right to void any or all bets made by any individual/group of people acting in liaison/collusion and attempts of fraudulent. The money in the accounts will be confiscated immediately.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">12</span>
              Indemnity
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>12.1</strong> You agree to indemnify and hold Winbox, our employees, officers, directors, licensees, distributors, affiliates, subsidiaries and agents for any loss, damage or claim (including reasonable legal fees) that may incur out of violation of the Terms and Conditions and/or Betting Rules.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">13</span>
              Violation
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>13.1</strong> Winbox reserves the right to seek all remedies in respect of any violation of these Terms and Conditions, including the right to deny or restrict access to the Services, Website(s) and Information to any particular person, terminate your account or to block access from a particular Internet address at any time and at our sole and absolute discretion.</p>
              <p><strong>13.2</strong> You agree to fully indemnify and hold harmless Winbox and its affiliates, employees, agents and associates from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever that may arise as a result of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>i. your breach of the Agreement, in whole or in part;</li>
                <li>ii. violation of any law or third party rights;</li>
                <li>iii. use of Services and/or Site by you or other person using your Winbox login details</li>
              </ul>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-sky-100 text-sky-600 w-10 h-10 rounded-lg flex items-center justify-center text-lg">14</span>
              Miscellaneous
            </h2>
            <div className="space-y-4 pl-4 border-l-2 border-slate-100">
              <p><strong>14.1</strong> The English language version of this Agreement shall be the prevailing version in the event of any discrepancy between any translated versions of this Agreement.</p>
              <p><strong>14.2</strong> This Agreement constitutes the entire understanding and agreement between <Link to="/" className="text-sky-600 font-bold hover:underline">Winbox</Link> and you regarding the Services and the Site and supersedes any prior agreement, understanding or arrangement.</p>
            </div>
          </section>

          {/* Core Support SEO Quick-Links */}
          <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link 
              to="/" 
              className="bg-sky-50 hover:bg-sky-100 border border-sky-100 text-sky-900 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-sky-100/30 transition-all group"
            >
              <div className="space-y-2">
                <h4 className="font-black uppercase tracking-wider text-xs text-sky-700">Go to Homepage</h4>
                <p className="text-xs text-slate-500 font-medium">Access official gaming lobbies & promotions.</p>
              </div>
              <div className="mt-4 flex items-center gap-1 font-black uppercase text-[10px] tracking-widest text-sky-600 group-hover:translate-x-1 transition-transform">
                Winbox Home &rarr;
              </div>
            </Link>

            <Link 
              to="/login" 
              className="bg-blue-50 hover:bg-blue-100 border border-blue-100 text-blue-900 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-blue-100/30 transition-all group"
            >
              <div className="space-y-2">
                <h4 className="font-black uppercase tracking-wider text-xs text-blue-700">Official Login Portal</h4>
                <p className="text-xs text-slate-500 font-medium">Log into your existing Winbox account securely.</p>
              </div>
              <div className="mt-4 flex items-center gap-1 font-black uppercase text-[10px] tracking-widest text-blue-600 group-hover:translate-x-1 transition-transform">
                Winbox Login &rarr;
              </div>
            </Link>

            <Link 
              to="/download" 
              className="bg-emerald-50 hover:bg-emerald-150 border border-emerald-100 text-emerald-900 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-100/35 transition-all group"
            >
              <div className="space-y-2">
                <h4 className="font-black uppercase tracking-wider text-xs text-emerald-700">Download Mobile Apps</h4>
                <p className="text-xs text-slate-500 font-medium">Get the latest secure version for iOS & Android APK.</p>
              </div>
              <div className="mt-4 flex items-center gap-1 font-black uppercase text-[10px] tracking-widest text-emerald-600 group-hover:translate-x-1 transition-transform">
                Winbox Download &rarr;
              </div>
            </Link>
          </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
};
