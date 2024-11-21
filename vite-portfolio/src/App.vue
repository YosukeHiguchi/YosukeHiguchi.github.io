<template>
  <div class="mx-auto py-12 md:pt-24 max-w-4xl px-4">
    <div class="flex flex-col gap-8 md:flex-row md:gap-12 md:items-center">
      <img
        class="rounded-lg h-48 w-48 md:h-64 md:w-64 shadow-lg"
        src="/img/portrait-20240326.jpg"
      />
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-4xl text-white md:text-5xl">
          <span class="text-teal-300">#</span>
          Yosuke Higuchi &nbsp;Ph.D.
        </h1>
        <div class="mt-4 flex items-center gap-5 text-4xl">
          <a
            data-tooltip-target="tooltip-email"
            data-tooltip-placement="bottom"
            href="mailto:higuchi@pcl.cs.waseda.ac.jp"
            target="_blank"
            ><i class="fas fa-envelope hover:text-white"></i>
          </a>
          <div id="tooltip-email" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            higuchi@pcl.cs.waseda.ac.jp
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            data-tooltip-target="tooltip-linkedin"
            data-tooltip-placement="bottom"
            href="https://www.linkedin.com/in/yosuke-higuchi-557731196"
            target="_blank"
            ><i class="fab fa-linkedin hover:text-white"></i></a
          >
          <div id="tooltip-linkedin" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            LinkedIn
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            data-tooltip-target="tooltip-github"
            data-tooltip-placement="bottom"
            href="https://github.com/YosukeHiguchi"
            target="_blank"
            ><i class="fab fa-github hover:text-white"></i></a
          >
          <div id="tooltip-github" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            GitHub
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            data-tooltip-target="tooltip-google-scholar"
            data-tooltip-placement="bottom"
            href="https://scholar.google.com/citations?user=BHsQFtMAAAAJ&hl"
            target="_blank"
            ><i class="fas fa-graduation-cap hover:text-white"></i></a
          >
          <div id="tooltip-google-scholar" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            Google Scholar
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            data-tooltip-target="tooltip-cv"
            data-tooltip-placement="bottom"
            href="/img/curriculum_vitae.pdf"
            target="_blank"
            ><i class="fas fa-address-card hover:text-white"></i></a
          >
          <div id="tooltip-cv" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            Curriculum Vitae
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            data-tooltip-target="tooltip-location"
            data-tooltip-placement="bottom"
            href="https://maps.app.goo.gl/yZsPrHh862DaqaHD6"
            target="_blank"
            ><i class="fas fa-map-marker-alt hover:text-white"></i></a
          >
          </div>
          <div id="tooltip-location" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-base font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600">
            Tokyo, Japan
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        <div class="mt-16 md:text-xl text-center text-justify">
          Researcher at the
          <a
            class="text-teal-300 hover:text-teal-200 hover:underline"
            href="http://www.pcl.cs.waseda.ac.jp/"
            target="_blank"
            >Perceptual Computing Laboratory</a
          >,
          Waseda University, Japan,
          working on speech and language understanding.
        </div>
      </div>
    </div>
    <div class="relative mt-14">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-3xl text-white md:text-3xl"
      >
        <span class="text-teal-300">##</span> Work Experience
      </h2>
      <div class="flex flex-col mt-4">
        <WorkExperienceItem
          period="Apr. 2024 - Present"
          company="Waseda University"
          companyImg="/img/logo-waseda.png"
          companyNote="| Tokyo, Japan"
          companyHref="https://www.fse.sci.waseda.ac.jp/en/"
          jobTitle="Research Assistant Professor"
        >
          <li>Working on developing speech understanding systems for dialog systems</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Oct. 2022 - Jan. 2023"
          company="Google LLC"
          companyImg="/img/logo-google.png"
          companyNote="| New York, USA"
          jobTitle="Research Intern"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://scholar.google.com/citations?user=40bq19cAAAAJ&hl=en">
              Andrew Rosenberg</a
            > and
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/view/bhuvana-ramabhadran/home">
              Bhuvana Ramabhadran</a
            >
          </li>
          <li>Worked on text injection in speech recognition</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Mar. 2022 - June 2022"
          company="Carnegie Mellon University"
          companyImg="/img/logo-cmu-lti.png"
          companyNote="| Pennsylvania, USA"
          companyHref="https://www.lti.cs.cmu.edu/"
          jobTitle="Visiting Scholar"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/view/shinjiwatanabe">
              Shinji Watanabe</a
            >
          </li>
          <li>Worked on language modeling in speech recognition</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Apr. 2021 - Dec. 2021 Oct. 2020 - Mar. 2021"
          company="Mitsubishi Electric Research Labs."
          companyImg="/img/logo-merl.png"
          companyNote="| Massachusetts, USA"
          companyHref="https://www.merl.com/"
          jobTitle="Part-Time Researcher ← Research Internship (Remote)"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://scholar.google.com/citations?user=ZZGpQG4AAAAJ&hl=en">
              Takaaki Hori</a
            >,
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://scholar.google.com/citations?user=9YaJtg8AAAAJ&hl=en">
              Niko Moritz</a
            > and
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="http://www.jonathanleroux.org/index.html">
              Jonathan Le Roux</a
            >
          </li>
          <li>Worked on semi-supervised speech recognition</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Dec. 2019 - Mar. 2020"
          company="Johns Hopkins University"
          companyImg="/img/logo-jhu-clsp.png"
          companyNote="| Maryland, USA"
          companyHref="https://www.clsp.jhu.edu/"
          jobTitle="Visiting Scholar"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/view/shinjiwatanabe">
              Shinji Watanabe</a
            >
          </li>
          <li>Worked on non-autoregressive speech recognition</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="June 2019 - Oct. 2019"
          company="IBM Research AI"
          companyImg="/img/logo-ibm.png"
          companyNote="| Tokyo, Japan"
          companyHref="https://www.ibm.com/us-en?lnk=fcc/"
          jobTitle="Research Intern"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://scholar.google.com/citations?user=up5mTKIAAAAJ&hl=en/">
              Masayuki Suzuki</a
            > and
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://research.ibm.com/people/gakuto-kurata/">
              Gakuto Kurata</a
            >
          </li>
          <li> Worked on speaker embedding networks for speaker diarization</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          class="mt-6"
          period="Aug. 2018 - Sept. 2018"
          company="NTT Communication Science Labs."
          companyImg="/img/logo-ntt.png"
          companyNote="| Kanagawa, Japan"
          companyHref="https://www.rd.ntt/e/cs/"
          jobTitle="Research Intern"
        >
          <li>Mentor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="http://www.kecl.ntt.co.jp/people/kameoka.hirokazu/index-e.html">
              Hirokazu Kameoka</a
            >
          </li>
          <li> Worked on voice conversion based on generative adversarial networks</li>
        </WorkExperienceItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-3xl text-white md:text-3xl"
      >
        <span class="text-teal-300">##</span> Education
      </h2>
      <div class="flex flex-col gap-6 mt-4">
        <WorkExperienceItem
          period="Apr. 2021 - Mar. 2024"
          company="Ph.D. in Computer Science and Engineering"
          companyImg="/img/logo-waseda.png"
          companyHref="https://www.fse.sci.waseda.ac.jp/en/"
          jobTitle="Waseda University, Tokyo, Japan"
        >
          <li>
            Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://researchmap.jp/tetsunori?lang=en/"
              >Tetsunori Kobayashi</a
            >
          </li>
          <li>
            Co-Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/site/ogatetsu/eng/"
              >Tetsuji Ogawa</a
            >
          </li>
          <li>Thesis:
            <a
            class="hover:text-neutral-200 hover:underline"
            href="https://waseda.repo.nii.ac.jp/records/2002443"
            target="_blank"
            >
              "Incorporating Linguistic Cues for End-to-End Speech Recognition"
              <img
                class="inline-flex text-white h-4 stroke-neutral-400"
                src="/img/external_link.svg"
              />
              </a
            >
          </li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2019 - Mar. 2021"
          company="M.E. in Computer Science and Engineering"
          companyImg="/img/logo-waseda.png"
          companyHref="https://www.fse.sci.waseda.ac.jp/en/"
          jobTitle="Waseda University, Tokyo, Japan"
        >
          <li>
            Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://researchmap.jp/tetsunori?lang=en/"
              >Tetsunori Kobayashi</a
            >
          </li>
          <li>
            Co-Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/site/ogatetsu/eng/"
              >Tetsuji Ogawa</a
            >
          </li>
          <li>Thesis: "Non-Autoregressive End-to-End Speech Recognition with CTC and Mask-predict"</li>
        </WorkExperienceItem>
        <WorkExperienceItem
          period="Apr. 2015 - Mar. 2019"
          company="B.E. in Computer Science and Engineering"
          companySub="(with Minor in Intermedia Art and Science)"
          companyImg="/img/logo-waseda.png"
          companyHref="https://www.fse.sci.waseda.ac.jp/en/"
          jobTitle="Waseda University, Tokyo, Japan"
        >
          <li>
            Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://researchmap.jp/tetsunori?lang=en/"
              >Tetsunori Kobayashi</a
            >
          </li>
          <li>
            Co-Supervisor:
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://sites.google.com/site/ogatetsu/eng/"
              >Tetsuji Ogawa</a
            > and
            <a
              class="text-teal-300 hover:text-teal-200 hover:underline"
              href="https://www.kecl.ntt.co.jp/icl/signal/member/tawara/index.html"
              >Naohiro Tawara</a
            >
          </li>
          <li>Thesis: "Speaker Invariant Feature Extraction for Zero-Resource Languages"</li>
        </WorkExperienceItem>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-3xl text-white md:text-3xl"
      >
        <span class="text-teal-300">##</span> Publications
      </h2>
      <h3 class="mt-3 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Preprint
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="End-to-End Speech Recognition with Pre-trained Masked Language Model"
          authors="Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi, Shinji Watanabe"
          publishedAt="arXiv"
          linkArxiv="http://arxiv.org/abs/2410.00528"
          date="October 2024"
        />
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Predictive Speech Recognition and End-of-Utterance Detection Towards Spoken Dialog Systems"
          authors="Oswald Zink, Yosuke Higuchi, Carlos Mullov, Alexander Waibel, Tetsunori Kobayashi"
          publishedAt="arXiv"
          linkArxiv="http://arxiv.org/abs/2409.19990"
          date="September 2024"
        />
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Harnessing the Zero-Shot Power of Instruction-Tuned Large Language Model in End-to-End Speech Recognition"
          authors="Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="arXiv"
          linkArxiv="https://arxiv.org/abs/2309.10524"
          date="September 2023"
        />
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Non-autoregressive End-to-end Speech Translation with Parallel Autoregressive Rescoring"
          authors="Hirofumi Inaguma, Yosuke Higuchi, Kevin Duh, Tatsuya Kawahara, Shinji Watanabe"
          publishedAt="arXiv"
          linkArxiv="https://arxiv.org/abs/2109.04411"
          date="September 2021"
        />
      </div>
      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Journal (Peer-Reviewed, First Author)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Momentum Pseudo-Labeling: Semi-Supervised ASR with Continuously Improving Pseudo-Labels"
          authors="Yosuke Higuchi, Niko Moritz, Jonathan Le Roux, Takaaki Hori"
          publishedAt="IEEE Journal of Selected Topics in Signal Processing"
          date="October 2022"
          linkIeee="https://ieeexplore.ieee.org/document/9846970"
          linkPdf="https://www.merl.com/publications/docs/TR2022-112.pdf"
        />
      </div>
      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> International Conferences (Peer-Reviewed, First Author)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Mask-Conformer: Augmenting Conformer with Mask-Predict Decoder"
          authors="Yosuke Higuchi, Andrew Rosenberg, Yuan Wang, Murali Karthick Baskar, Bhuvana Ramabhadran"
          publishedAt="2023 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU)"
          date="December 2023"
          linkIeee="https://ieeexplore.ieee.org/document/10389803"
        />
        <PublicationItem
          title="BECTRA: Transducer-based End-to-End ASR with BERT-Enhanced Encoder"
          authors="Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi, Shinji Watanabe"
          publishedAt="2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="June 2023"
          linkArxiv="https://arxiv.org/abs/2211.00792"
          linkIeee="https://ieeexplore.ieee.org/document/10095186"
        />
        <PublicationItem
          title="InterMPL: Momentum Pseudo-Labeling with Intermediate CTC Loss"
          authors="Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi, Shinji Watanabe"
          publishedAt="2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="June 2023"
          linkArxiv="https://arxiv.org/abs/2211.00795"
          linkIeee="https://ieeexplore.ieee.org/document/10097071"
        />
        <PublicationItem
          title="BERT Meets CTC: New Formulation of End-to-End Speech Recognition with Pre-trained Masked Language Model"
          authors="Yosuke Higuchi, Brian Yan, Siddhant Arora, Tetsuji Ogawa, Tetsunori Kobayashi, Shinji Watanabe"
          publishedAt="Findings of the Association for Computational Linguistics: EMNLP 2022"
          date="December 2022"
          linkArxiv="https://arxiv.org/pdf/2210.16663.pdf"
          linkAcl="https://aclanthology.org/2022.findings-emnlp.402/"
        />
        <PublicationItem
          title="Hierarchical Conditional End-to-End ASR with CTC and Multi-Granular Subword Units"
          authors="Yosuke Higuchi, Keita Karube, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="May 2022"
          linkArxiv="https://arxiv.org/abs/2110.04109"
          linkIeee="https://ieeexplore.ieee.org/document/9746580"
        />
        <PublicationItem
          title="Advancing Momentum Pseudo-Labeling with Conformer and Initialization Strategy"
          authors="Yosuke Higuchi, Niko Moritz, Jonathan Le Roux, Takaaki Hori"
          publishedAt="2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="May 2022"
          linkArxiv="https://arxiv.org/abs/2110.04948"
          linkIeee="https://ieeexplore.ieee.org/abstract/document/9746275"
          linkPdf="https://www.merl.com/publications/docs/TR2022-026.pdf"
        />
        <PublicationItem
          title="A Comparative Study on Non-Autoregressive Modelings for Speech-to-Text Generation"
          authors="Yosuke Higuchi, Nanxin Chen, Yuya Fujita, Hirofumi Inaguma, Tatsuya Komatsu, Jaesong Lee, Jumon Nozaki, Tianzi Wang, Shinji Watanabe"
          publishedAt="2021 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU)"
          date="December 2021"
          linkArxiv="https://arxiv.org/abs/2110.05249"
          linkIeee="https://ieeexplore.ieee.org/abstract/document/9688157"
        />
        <PublicationItem
          title="Momentum Pseudo-Labeling for Semi-Supervised Speech Recognition"
          authors="Yosuke Higuchi, Niko Moritz, Jonathan Le Roux, Takaaki Hori"
          publishedAt="22nd Annual Conference of International Speech Communication Association (INTERSPEECH)"
          date="August 2021"
          linkArxiv="https://arxiv.org/abs/2106.08922"
          linkIsca="https://www.isca-speech.org/archive/interspeech_2021/higuchi21_interspeech.html"
          linkPdf="https://merl.com/publications/docs/TR2021-103.pdf"
        />
        <PublicationItem
          title="Improved Mask-CTC for Non-Autoregressive End-to-End ASR"
          authors="Yosuke Higuchi, Shinji Watanabe, Hirofumi Inaguma, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="June 2021"
          linkArxiv="https://arxiv.org/abs/2010.13270"
          linkIeee="https://ieeexplore.ieee.org/document/9414198"
        />
        <PublicationItem
          title="Noise-robust Attention Learning for End-to-End Speech Recognition"
          authors="Yosuke Higuchi, Naohiro Tawara, Atsunori Ogawa, Tomoharu Iwata, Tetsunori Kobayashi, Tetsuji Ogawa"
          publishedAt="28th European Signal Processing Conference (EUSIPCO)"
          date="January 2021"
          linkIeee="https://ieeexplore.ieee.org/abstract/document/9287488"
          linkPdf="https://www.eurasip.org/Proceedings/Eusipco/Eusipco2020/pdfs/0000311.pdf"
        />
        <PublicationItem
          title="Mask CTC: Non-Autoregressive End-to-End ASR with CTC and Mask Predict"
          authors="Yosuke Higuchi, Shinji Watanabe, Nanxin Chen, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="21st Annual Conference of International Speech Communication Association (INTERSPEECH)"
          date="October 2020"
          linkArxiv="https://arxiv.org/abs/2005.08700"
          linkIsca="https://www.isca-speech.org/archive/interspeech_2020/higuchi20b_interspeech.html"
        />
        <PublicationItem
          title="Speaker Embeddings Incorporating Acoustic Conditions for Diarization"
          authors="Yosuke Higuchi, Masayuki Suzuki, Gakuto Kurata"
          publishedAt="2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="May 2020"
          linkIeee="https://ieeexplore.ieee.org/document/9054273"
        />
        <PublicationItem
          title="Speaker Adversarial Training of DPGMM-based Feature Extractor for Zero-Resource Languages"
          authors="Yosuke Higuchi, Naohiro Tawara, Tetsunori Kobayashi, Tetsuji Ogawa"
          publishedAt="20th Annual Conference of International Speech Communication Association (INTERSPEECH)"
          date="September 2019"
          linkIsca="https://www.isca-speech.org/archive/interspeech_2019/higuchi19_interspeech.html"
        />
      </div>

      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> International Conferences (Peer-Reviewed, Co-Author)
      </h3>
      <div class="flex flex-col gap-4 mt-4">
        <PublicationItem
          title="Differences Between Singer and Speaker Verification: Training Singer Feature Representation Extractor Utilizing Singing Voice Characteristics"
          authors="Sayaka Toma, Tomoki Ariga, Yosuke Higuchi, Ichiju Hayasaka, Rie Shigyo, Tetsuji Ogawa"
          publishedAt="Asia-Pacific Signal and Information Processing Association Annual Summit and Conference 2024 (APSIPA)"
          date="December 2024 (to appear)"
        />
        <PublicationItem
          title="Exploring Impact of Prioritizing Intra-Singer Acoustic Variations on Singer Embedding Extractor Construction for Singer Verification"
          authors="Sayaka Toma, Tomoki Ariga, Yosuke Higuchi, Ichiju Hayasaka, Rie Shigyo, Tetsuji Ogawa"
          publishedAt="27th International Conference of the Oriental COCOSDA (O-COCOSDA)"
          date="October 2024"
          prize="Best Paper Candidate"
        />
        <PublicationItem
          title="Hierarchical Multi-Task Learning with CTC and Recursive Operation"
          authors="Nahomi Kusunoki, Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="25th Annual Conference of International Speech Communication Association (INTERSPEECH)"
          date="September 2024"
          linkIsca="https://www.isca-archive.org/interspeech_2024/kusunoki24_interspeech.html"
        />
        <PublicationItem
          title="Parody Detection Using Source-Target Attention With Teacher-Forced Lyrics"
          authors="Tomoki Ariga, Yosuke Higuchi, Kazutoshi Hayasaka, Naoki Okamoto, and Tetsuji Ogawa"
          publishedAt="2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="April 2024"
          linkIeee="https://ieeexplore.ieee.org/document/10446577"
        />
        <PublicationItem
          title="Segment-Level Vectorized Beam Search Based on Partially Autoregressive Inference"
          authors="Masao Someki, Nicholas Eng, Yosuke Higuchi, Shinji Watanabe"
          publishedAt="2023 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU)"
          date="December 2023"
          linkArxiv="https://arxiv.org/abs/2309.14922"
          linkIeee="https://ieeexplore.ieee.org/document/10389796"
        />
        <PublicationItem
          title="Spotting Parodies: Detecting Alignment Collapse Between Lyrics and Singing Voice"
          authors="Tomoki Ariga, Yosuke Higuchi, Mitsunori Kanno, Rie Shigyo, Takato Mizuguchi, Naoki Okamoto, Tetsuji Ogawa"
          publishedAt="31st European Signal Processing Conference (EUSIPCO)"
          date="September 2023"
          linkIeee="https://ieeexplore.ieee.org/document/10290010"
          linkPdf="https://eurasip.org/Proceedings/Eusipco/Eusipco2023/pdfs/0000286.pdf"
        />
        <PublicationItem
          title="Mask-CTC-based Encoder Pre-training for Streaming End-to-End Speech Recognition"
          authors="Huaibo Zhao, Yosuke Higuchi, Yusuke Kida, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="31st European Signal Processing Conference (EUSIPCO)"
          date="September 2023"
          linkArxiv="https://arxiv.org/abs/2309.04654"
          linkIeee="https://ieeexplore.ieee.org/document/10290112"
          linkPdf="https://eurasip.org/Proceedings/Eusipco/Eusipco2023/pdfs/0000056.pdf"
        />
        <PublicationItem
          title="CTC Alignments Improve Autoregressive Translation"
          authors="Brian Yan, Siddharth Dalmia, Yosuke Higuchi, Graham Neubig, Florian Metze, Alan W Black, Shinji Watanabe"
          publishedAt="17th Conference of the European Chapter of the Association for Computational Linguistics (EACL)"
          date="May 2023"
          linkArxiv="https://arxiv.org/abs/2210.05200"
          linkAcl="https://aclanthology.org/2023.eacl-main.119/"
        />
        <PublicationItem
          title="A Study on the Integration of Pre-trained SSL, ASR, LM and SLU Models for Spoken Language Understanding"
          authors="Yifan Peng*, Siddhant Arora*, Yosuke Higuchi, Yushi Ueda, Sujay Kumar, Karthik Ganesan, Siddharth Dalmia, Xuankai Chang, Shinji Watanabe (*Equal Contribution)"
          publishedAt="2022 IEEE Spoken Language Technology Workshop (SLT)"
          date="January 2023"
          linkArxiv="https://arxiv.org/abs/2211.05869"
          linkIeee="https://ieeexplore.ieee.org/document/10022399"
        />
        <PublicationItem
          title="ESPnet-ONNX: Bridging a Gap Between Research and Production"
          authors="Masao Someki, Yosuke Higuchi, Tomoki Hayashi, Shinji Watanabe"
          publishedAt="2022 IEEE Spoken Language Technology Workshop (SLT)"
          date="November 2022"
          linkArxiv="https://arxiv.org/abs/2209.09756"
          linkIeee="https://ieeexplore.ieee.org/document/9979824"
        />
        <PublicationItem
          title="Improving Non-Autoregressive End-to-End Speech Recognition with Pre-trained Acoustic and Language Models"
          authors="Keqi Deng*, Zehui Yang*, Shinji Watanabe, Yosuke Higuchi, Gaofeng Cheng, Pengyuan Zhang (*Equal Contribution)"
          publishedAt="2022 IEEE Spoken Language Technology Workshop (SLT)"
          date="May 2022"
          linkArxiv="https://arxiv.org/abs/2201.10103"
          linkIeee="https://ieeexplore.ieee.org/document/9746316"
        />
        <PublicationItem
          title="An Investigation of Enhancing CTC Model for Triggered Attention-based Streaming ASR"
          authors="Huaibo Zhao, Yosuke Higuchi, Tetsuji Ogawa, Tetsunori Kobayashi"
          publishedAt="Asia-Pacific Signal and Information Processing Association Annual Summit and Conference 2021 (APSIPA)"
          date="December 2021"
          linkArxiv="https://arxiv.org/abs/2110.10402"
          linkIeee="https://ieeexplore.ieee.org/document/9689493"
        />
        <PublicationItem
          title="The 2020 ESPnet Update: New Features, Broadened Applications, Performance Improvements, and Future Plans"
          authors="Shinji Watanabe, Florian Boyer, Xuankai Chang, Pengcheng Guo, Tomoki Hayashi, Yosuke Higuchi, Takaaki Hori, Wen-Chin Huang, Hirofumi Inaguma, Naoyuki Kamo, Shigeki Karita, Chenda Li, Jing Shi, Aswin Shanmugam Subramanian, Wangyou Zhang"
          publishedAt="2021 IEEE Data Science & Learning Workshop (DSLW)"
          date="June 2021"
          linkArxiv="https://arxiv.org/abs/2012.13006"
          linkIeee="https://ieeexplore.ieee.org/abstract/document/9523402"
        />
        <PublicationItem
          title="Recent Developments on ESPnet Toolkit Boosted by Conformer"
          authors="Pengcheng Guo, Florian Boyer, Xuankai Chang, Tomoki Hayashi, Yosuke Higuchi, Hirofumi Inaguma, Naoyuki Kamo, Chenda Li, Daniel Garcia-Romero, Jiatong Shi, Jing Shi, Shinji Watanabe, Kun Wei, Wangyou Zhang, Yuekai Zhang"
          publishedAt="2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="June 2021"
          linkArxiv="https://arxiv.org/abs/2010.13956"
          linkIeee="https://ieeexplore.ieee.org/document/9414858"
        />
        <PublicationItem
          title="Orthros: Non-autoregressive End-to-end Speech Translation with Dual-decoder"
          authors="Hirofumi Inaguma, Yosuke Higuchi, Kevin Duh, Tatsuya Kawahara, Shinji Watanabe"
          publishedAt="2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
          date="June 2021"
          linkArxiv="https://arxiv.org/abs/2010.13047"
          linkIeee="https://ieeexplore.ieee.org/document/9415093"
        />
      </div>
      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Japanese Conference / Workshop (First Author)
      </h3>
      <Accordion>
        <div
            class="flex flex-col gap-6 overflow-hidden"
            v-if="showDomesticConfFirstAuthor"
        >
          <div class="flex flex-col gap-4 mt-4">
            <PublicationItem
              title="End-to-End 音声認識における指示チューニングされた大規模言語モデルの活用"
              authors="樋口陽祐，小川哲司，小林哲則"
              publishedAt="情報処理学会研究報告 (NL)"
              date="December 2024"
            />
            <PublicationItem
              title="事前学習済みマスク言語モデルを用いた End-to-End 音声認識"
              authors="樋口陽祐，小川哲司，小林哲則，渡部晋治"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="September 2023"
            />
            <PublicationItem
              title="粒度の異なるサブワード単位に基づく階層的条件付き End-to-End 音声認識"
              authors="樋口陽祐，軽部敬太，小川哲司，小林哲則"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="March 2022"
            />
            <PublicationItem
              title="Momentum Pseudo-Labeling による半教師あり End-to-End 音声認識"
              authors="樋口陽祐</u>，Moritz Niko，Le Roux Jonathan，堀貴明"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="March 2022"
            />
            <PublicationItem
              title="End-to-End 音声認識のための粒度の異なるサブワード単位に基づく階層的な条件づけ"
              authors="樋口陽祐，軽部敬太，小川哲司，小林哲則"
              publishedAt="情報処理学会研究報告 (SLP)"
              date="December 2021"
            />
            <PublicationItem
              title="CTC とマスク推定に基づく推論速度の速い End-to-End 音声認識"
              authors="樋口陽祐，渡部晋治，稲熊寛文，小川哲司，小林哲則"
              publishedAt="電子情報通信学会技術研究報告 (SP)"
              date="December 2020"
              prize="音声研究会研究奨励賞"
            />
            <PublicationItem
              title="Mask CTC: CTC とマスク推定に基づいた非自己回帰的な End-to-End 音声認識"
              authors="樋口陽祐，渡部晋治，Chen Nanxin，小川哲司，小林哲則"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="September 2020"
              prize="学生優秀発表賞"
            />
            <PublicationItem
              title="ダイアライゼーションのための音響的環境を考慮した話者エンベディング"
              authors="樋口陽祐，鈴木雅之，倉田岳人"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="September 2020"
            />
            <PublicationItem
              title="Attention に関する損失を利用したノイズに頑健な End-to-End 音声認識"
              authors="樋口陽祐，俵直弘，小川厚徳，岩田具治，小林 哲則，小川哲司"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="March 2020"
            />
            <PublicationItem
              title="DPGMM と敵対的学習に基づく話者の違いに頑健な特徴抽出とゼロリソース音声認識での評価"
              authors="樋口陽祐，俵直弘，小林哲則，小川哲司"
              publishedAt="情報処理学会研究報告 (SLP)"
              date="July 2019"
              prize="Yahoo! JAPAN賞, 山下記念研究賞"
            />
            <PublicationItem
              title="ゼロリソース言語音声認識のための発話者の違いに頑健な特徴抽出"
              authors="樋口陽祐，俵直弘，小川哲司，小林哲則"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="March 2019"
            />
          </div>
        </div>
      </Accordion>
      <div class="flex items-center mt-6">
        <div class="flex-1 h-[1px] bg-neutral-600"></div>
        <button
          class="mx-2 px-2 py-1 text-neutral-400 hover:bg-neutral-700 rounded-md"
          @click="showDomesticConfFirstAuthor = !showDomesticConfFirstAuthor"
        >
          {{ showDomesticConfFirstAuthor ? "▲ Hide" : "▼ Show" }}
        </button>
        <div class="flex-1 h-[1px] bg-neutral-600"></div>
      </div>
      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Japanese Conference / Workshop (Co-Author)
      </h3>
      <Accordion>
        <div
            class="flex flex-col gap-6 overflow-hidden"
            v-if="showDomesticConfCoAuthor"
        >
          <div class="flex flex-col gap-4 mt-4">
            <PublicationItem
              title="再帰的フィードバックを用いた階層的 End-to-End 音声認識"
              authors="楠奈穂美，樋口陽祐，小川哲司，小林哲則"
              publishedAt="情報処理学会研究報告 (SLP)"
              date="December 2024"
            />
            <PublicationItem
              title="歌唱者埋め込み表現抽出器の構築において歌唱者内の音響変動を重要視することの効果の検証"
              authors="当間佐耶佳，有賀智輝，樋口陽祐，早坂一寿，執行里恵，小川哲司"
              publishedAt="電子情報通信学会技術研究報告 (SP)"
              date="June 2024"
            />
            <PublicationItem
              title="再帰的フィードバックを用いた階層的マルチタスク学習による End-to-End 音声認識"
              authors="楠奈穂美，樋口陽祐，小川哲司，小林哲則"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="March 2024"
              prize="学生優秀発表賞"
            />
            <PublicationItem
              title="事前学習済み音声認識モデルを用いた笑い声検出"
              authors="牛尾貴志，樋口陽祐，久原卓，藤原晴雄，加藤博司"
              publishedAt="言語・音声理解と対話処理研究会 (SLUD)"
              date="September 2023"
            />
            <PublicationItem
              title="深層話者埋め込みを用いた歌唱者の照合に関する検討"
              authors="当間佐耶佳，有賀智輝，樋口陽祐，早坂一寿，岡本直紀，小川哲司"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="September 2023"
            />
            <PublicationItem
              title="Teacher-Forcing により歌詞を与えた際の Attention の崩れに着目した替え歌検知"
              authors="有賀智輝，樋口陽祐，早坂一寿，岡本直紀，小林哲則，小川哲司"
              publishedAt="日本音響学会研究発表会講演論文集 (ASJ)"
              date="September 2023"
            />
            <PublicationItem
              title="歌詞と歌唱音声のアライメント崩れに基づく替え歌検知"
              authors="有賀智輝，樋口陽祐，菅野光則，執行里恵，水口天都，岡本直紀，小川哲司"
              publishedAt="電子情報通信学会技術研究報告 (SP)"
              date="June 2023"
            />
            <PublicationItem
              title="Transducer 型ストリーミング音声認識における Mask-CTC を用いた事前学習"
              authors="趙懐博，樋口陽祐，木田祐介，小川哲司，小林哲則"
              publishedAt="情報処理学会研究報告 (SLP)"
              date="June 2022"
              prize="山下記念研究賞"
            />
            <PublicationItem
              title="Triggered attention 型ストリーミング音声認識における Mask-CTC を用いた事前学習"
              authors="趙懐博，樋口陽祐，小川哲司，小林哲則"
              publishedAt="情報処理学会研究報告 (SLP)"
              date="October 2021"
            />
          </div>
        </div>
      </Accordion>
      <div class="flex items-center mt-6">
        <div class="flex-1 h-[1px] bg-neutral-600"></div>
        <button
          class="mx-2 px-2 py-1 text-neutral-400 hover:bg-neutral-700 rounded-md"
          @click="showDomesticConfCoAuthor = !showDomesticConfCoAuthor"
        >
          {{ showDomesticConfCoAuthor ? "▲ Hide" : "▼ Show" }}
        </button>
        <div class="flex-1 h-[1px] bg-neutral-600"></div>
      </div>
    </div>
    <div class="mt-16">
      <h2
        class="py-3 md:py-4 bg-neutral-800/60 backdrop-blur-sm top-0 sticky font-bold text-3xl text-white md:text-3xl"
      >
        <span class="text-teal-300">##</span> Awards & Grants
      </h2>
      <h3 class="mt-3 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Awards
      </h3>
      <div class="flex flex-col gap-3 mt-4">
        <AwardItem
          title="Best Reviewer Award"
          from="IEEE ASRU 2023"
          date="Dec. 2023"
        />
        <AwardItem
          title="ISS Young Researcher's Award in Speech Field"
          from="the Institute of Electronics, Information and Communication Engineers (IEICE)"
          date="Sept. 2021"
          href="https://www.ieice.org/~sp/jpn/special/sp-prize.html"
        />
        <AwardItem
          title="Best Student Presentation Award"
          from="the Acoustical Society of Japan (ASJ)"
          date="Nov. 2020"
          href="https://acoustics.jp/awards/student/"
        />
        <AwardItem
          title="Yamashita SIG Research Award"
          from="the Information Processing Society of Japan (IPSJ)"
          date="Aug. 2020"
          href="https://www.ipsj.or.jp/award/yamasita2020-detail.html#slp"
        />
        <AwardItem
          title="Yahoo! JAPAN Award"
          from="the Information Processing Society of Japan (IPSJ) SIG-SLP"
          date="Jan. 2020"
          href="http://www.ipsj.or.jp/award/slp-award2.html#hdg1"
        />
      </div>
      <h3 class="mt-8 text-2xl font-bold">
        <span class="text-neutral-500">###</span> Grants
      </h3>
      <div class="flex flex-col gap-3 mt-4">
        <AwardItem
          title="Super Global University (Visiting to Carnegie Mellon University)"
          from="ICT & Robotics, Waseda University"
          date="Mar. 2022 - June 2022"
          href="https://www.waseda.jp/fsci/ict-robotics/study-abroad/4464"
        />
        <AwardItem
          title="ACT-X Frontier of Mathematics and Information Science"
          from="Japan Science and Technology Agency (JST)"
          date="Oct. 2021 - Mar. 2024"
          href="https://www.jst.go.jp/kisoken/act-x/application/2021/210921/210921act-x.pdf"
        />
        <AwardItem
          title="Research Fellowship for Young Scientists (DC1)"
          from="Japan Society for the Promotion of Science (JSPS)"
          date="Apr. 2021 - Mar. 2024"
          href="https://www.jsps.go.jp/j-pd/data/saiyo_ichiran/r03/dc1/r3_dc1.pdf"
        />
        <AwardItem
          title="Super Global University (Visiting to Johns Hopking University)"
          from="ICT & Robotics, Waseda University"
          date="Dec. 2019 - Mar. 2020"
          href="https://www.waseda.jp/fsci/ict-robotics/study-abroad-en/3312"
        />
        <AwardItem
          title="Repayment Exemption for Graduate Students with Excellent Achievements (Type I; full-exemption)"
          from="Japan Student Services Organization (JASSO)"
          date="Apr. 2019 - Mar. 2021"
        />
      </div>
    </div>
    <div class="mt-16 w-full text-center text-neutral-400 text-sm">
      Updated on 2024/10/12. This site was developed from
      <a
        class="text-teal-500 hover:text-teal-400 hover:underline"
        href="https://github.com/takatoy/takatoy.github.io"
        >takatoy.github.io</a
      >.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Accordion from "./components/Accordion.vue";
import WorkExperienceItem from "./components/WorkExperienceItem.vue";
import PublicationItem from "./components/PublicationItem.vue";
import AwardItem from "./components/AwardItem.vue";

const showDomesticConfFirstAuthor = ref(false);
const showDomesticConfCoAuthor = ref(false);
</script>