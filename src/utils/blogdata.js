const blogData = [
    {
        id: 1,
        title: "Advancements in Cancer Research",
        info: "Cancer research has seen numerous breakthroughs in recent years, particularly in immunotherapy, targeted therapies, and personalized medicine. These advances are revolutionizing treatment options and improving patient survival rates.",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20230809094741/ri/950/src/images/Article_Images/ImageForArticle_23810_16915888619706656.jpg"
    },
    {
        id: 2,
        title: "The Future of Genetic Medicine",
        info: "Genetic medicine is paving the way for new approaches in diagnosing and treating a variety of diseases. By understanding the genetic basis of diseases, doctors can offer more effective and targeted treatments.",
        image: "https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/06/shutterstock_1669326868.jpg"
    },
    {
        id: 3,
        title: "Managing Cardiovascular Diseases",
        info: "Cardiovascular diseases are a leading cause of death globally. With advancements in medication, surgical procedures, and preventative care, the medical field is making strides in managing these conditions effectively.",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20240129114823/ri/950/src/images/news/ImageForNews_770339_17065468989558986.jpg"
    },
    {
        id: 4,
        title: "The Role of AI in Modern Healthcare",
        info: "Artificial Intelligence (AI) is transforming the healthcare industry by providing faster diagnostics, personalized treatments, and enhanced patient care. The future of AI in healthcare holds enormous potential.",
        image: "https://cdn.sanity.io/images/0vv8moc6/pharmtech/c70cfea42b7b1be5edae5d7ca34b7287c6301534-1280x720.jpg/AI-in-Pharma_AdobeStock_604538163_ipopba.jpg?fit=crop&auto=format"
    },
    {
        id: 5,
        title: "Innovations in Surgical Techniques",
        info: "Minimally invasive surgeries, robotic-assisted procedures, and 3D printing technology are just a few of the innovations improving surgical outcomes. These advancements are reducing recovery time and improving patient care.",
        image: "https://cdn.mskdoctors.com/thumbs/pAGFIXoLts6qasKZZq-hE1-UgIA=/filters:no_upscale():format(webp)/cdn.mskdoctors.com/storage/2024/8/YQSzQ2G3eMW8pj8W8RGhEOF7O5VOXOV3.jpg"
    },
    {
        id: 6,
        title: "Combating Infectious Diseases",
        info: "Infectious diseases continue to challenge healthcare systems worldwide. Research in vaccines, antiviral treatments, and public health strategies plays a crucial role in controlling outbreaks and preventing pandemics.",
        image: "https://www.educare.co.uk/img_cms/news/boy%20and%20girl%20washing%20hands%20AdobeStock_154987013_960.jpg"
    },
    {
        id: 7,
        title: "Mental Health and Well-Being",
        info: "Mental health is becoming a critical focus in modern medicine. Understanding and treating conditions like depression, anxiety, and PTSD are essential to improving overall patient well-being and societal health.",
        image: "https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-84e1005/s39613.pcdn.co/wp-content/uploads/2024/04/02.19_mental-health-critical-framework.jpg"
    },
    {
        id: 8,
        title: "New Horizons in Diabetes Care",
        info: "Diabetes management is advancing with new medications, technologies such as continuous glucose monitors, and personalized treatment plans, helping patients achieve better control over their blood sugar levels.",
        image: "https://assets.entrepreneur.com/content/3x2/2000/20160126153527-sugar-glucose-test-diabetic-diabetes-insulin-blood-test-glucometer.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
    },
    {
        id: 9,
        title: "The Importance of Preventative Healthcare",
        info: "Preventative healthcare is essential to reduce the burden of chronic diseases. Routine screenings, vaccinations, and healthy lifestyle choices are key components of an effective preventative health strategy.",
        image: "https://memorialregionalhealth.com/wp-content/uploads/Primary-Care-doc-and-patient-scaled.jpg"
    },
    {
        id: 10,
        title: "Advancements in Cancer Research",
        info: "Cancer research has seen numerous breakthroughs in recent years, particularly in immunotherapy, targeted therapies, and personalized medicine. These advances are revolutionizing treatment options and improving patient survival rates.",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20230809094741/ri/950/src/images/Article_Images/ImageForArticle_23810_16915888619706656.jpg"
    },
    {
        id: 11,
        title: "The Future of Genetic Medicine",
        info: "Genetic medicine is paving the way for new approaches in diagnosing and treating a variety of diseases. By understanding the genetic basis of diseases, doctors can offer more effective and targeted treatments.",
        image: "https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2021/06/shutterstock_1669326868.jpg"
    },
    {
        id: 12,
        title: "Managing Cardiovascular Diseases",
        info: "Cardiovascular diseases are a leading cause of death globally. With advancements in medication, surgical procedures, and preventative care, the medical field is making strides in managing these conditions effectively.",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20240129114823/ri/950/src/images/news/ImageForNews_770339_17065468989558986.jpg"
    },
    {
        id: 13,
        title: "The Role of AI in Modern Healthcare",
        info: "Artificial Intelligence (AI) is transforming the healthcare industry by providing faster diagnostics, personalized treatments, and enhanced patient care. The future of AI in healthcare holds enormous potential.",
        image: "https://cdn.sanity.io/images/0vv8moc6/pharmtech/c70cfea42b7b1be5edae5d7ca34b7287c6301534-1280x720.jpg/AI-in-Pharma_AdobeStock_604538163_ipopba.jpg?fit=crop&auto=format"
    },
    {
        id: 14,
        title: "Innovations in Surgical Techniques",
        info: "Minimally invasive surgeries, robotic-assisted procedures, and 3D printing technology are just a few of the innovations improving surgical outcomes. These advancements are reducing recovery time and improving patient care.",
        image: "https://cdn.mskdoctors.com/thumbs/pAGFIXoLts6qasKZZq-hE1-UgIA=/filters:no_upscale():format(webp)/cdn.mskdoctors.com/storage/2024/8/YQSzQ2G3eMW8pj8W8RGhEOF7O5VOXOV3.jpg"
    },
    {
        id: 15,
        title: "Combating Infectious Diseases",
        info: "Infectious diseases continue to challenge healthcare systems worldwide. Research in vaccines, antiviral treatments, and public health strategies plays a crucial role in controlling outbreaks and preventing pandemics.",
        image: "https://www.educare.co.uk/img_cms/news/boy%20and%20girl%20washing%20hands%20AdobeStock_154987013_960.jpg"
    },
    {
        id: 16,
        title: "Mental Health and Well-Being",
        info: "Mental health is becoming a critical focus in modern medicine. Understanding and treating conditions like depression, anxiety, and PTSD are essential to improving overall patient well-being and societal health.",
        image: "https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-84e1005/s39613.pcdn.co/wp-content/uploads/2024/04/02.19_mental-health-critical-framework.jpg"
    },
    {
        id: 17,
        title: "New Horizons in Diabetes Care",
        info: "Diabetes management is advancing with new medications, technologies such as continuous glucose monitors, and personalized treatment plans, helping patients achieve better control over their blood sugar levels.",
        image: "https://assets.entrepreneur.com/content/3x2/2000/20160126153527-sugar-glucose-test-diabetic-diabetes-insulin-blood-test-glucometer.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
    },
    {
        id: 18,
        title: "The Importance of Preventative Healthcare",
        info: "Preventative healthcare is essential to reduce the burden of chronic diseases. Routine screenings, vaccinations, and healthy lifestyle choices are key components of an effective preventative health strategy.",
        image: "https://memorialregionalhealth.com/wp-content/uploads/Primary-Care-doc-and-patient-scaled.jpg"
    }
];

export default blogData;
