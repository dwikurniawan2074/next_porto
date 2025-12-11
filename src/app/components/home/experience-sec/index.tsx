import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2024-Now",
            title: "IT Developer Officer",
            company: "PT Permata Graha Nusantara",
            type: "Fulltime",
            description: "Developed and maintained systems using PHP (Yii), optimizing HR applications and building internal payment APIs with Laravel. Also created the LMS (Moodle) and maintained office network infrastructure."
        },
        {
            year: "2023-2024",
            title: "Fullstack Developer",
            company: "PT Trafoindo Prima Perkasa",
            type: "Internship",
            description: "Developed and maintained the full-stack Project Management and Tender Administration System. Collaborated with cross-functional teams to gather requirements, ensuring the system met all specifications and user needs."
        },
        {
            year: "2023-2023",
            title: "IT Developer",
            company: "PT Industri Kereta Api Persero",
            type: "Internship",
            description: "Contributed as a Full-Stack Developer to the KPI Monitoring System Project. Developed and maintained web applications using PHP and Laravel, collaborating with teams to collect and assess all project requirements."
        },
        {
            year: "2022-2023",
            title: "Informatics Intern",
            company: "BPKP Provinsi Lampung",
            type: "Internship",
            description: "As a Full-Stack Developer, successfully developed a simple inventory information system. Additionally, provided technical support to the Central Government Agency Secretary Division by assisting with important document archiving."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 01 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index % 2 !== 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index % 2 === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;