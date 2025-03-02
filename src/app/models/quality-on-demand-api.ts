import {Api} from './api.model'

export const QUALITY_ON_DEMAND_API: Api={
    id: "quality-on-demand",
    name: "Quality on Demand",
    status: "Ready",
    description: "Ensure optimum connectivity for your applications",
    icon: "assets/images/icon/api/quality-on-demand.png",
    version: "v0.3.0",
    tryItFreeLink: '#',
    learnMoreLink: '#',
    overview: {
        definition: {
            title: "Definition",
            content: `The “Quality-On-Demand” (QoD) API provides a programmable interface for developers to request stable latency or prioritized throughput managed by networks. This API abstracts the complexity of underlying network technologies, such as 4G/5G systems, allowing developers to focus on enhancing user experiences for applications that demand high-quality network communication.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `
            •	QoS Control (Quality of Service Control): Provides the ability to adjust network quality based on demand, ensuring a stable and optimized connection for various use cases.<br>
            •	Performance Optimization: Supports services that require low latency and high bandwidth, such as IoT, gaming, video streaming, or critical enterprise applications.<br>
            •	Security & Reliability: Enhances data transmission security, reducing the risk of connection loss and service disruptions.<br>`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "Faster and More Stable Online Gaming",
                    content:`Enhances online gaming by dynamically detecting network quality drops and activating connection optimizations in real time. When latency spikes, packet loss increases, or bandwidth fluctuates, the API proactively engages network enhancements such as prioritized traffic routing or adaptive bandwidth allocation. This ensures a seamless gaming experience with lower lag, improved stability, and minimized disruptions. By leveraging intelligent network monitoring and on-demand adjustments, gamers enjoy consistently high performance, making competitive and immersive gameplay more reliable and responsive.`,
                    image: 'assets/images/quality-on-demand/usecase1.jpg'
                },
                {
                    title: "Enhanced Entertainment Experience",
                    content:`Enhances the entertainment experience by ensuring seamless streaming of live sports events, replays, and summaries. It dynamically adjusts network performance to prevent buffering, latency, or quality drops, delivering smooth and uninterrupted content. By optimizing bandwidth and prioritizing streaming traffic, the API enables viewers to enjoy high-definition replays and event highlights without disruptions, enhancing engagement and immersion in live sports coverage.`,
                    image: 'assets/images/quality-on-demand/usecase2.jpg'
                },
                {
                    title: "VR-Assisted Surgery",
                    content:`Improves VR-assisted surgery by optimizing network latency and bandwidth for XR (Extended Reality) technology. It ensures real-time, high-fidelity visuals and precise remote interactions by dynamically adjusting connectivity to prevent lag or interruptions. This enables surgeons to perform remote procedures with greater accuracy, responsiveness, and reliability, improving patient outcomes and advancing telemedicine capabilities.`,
                    image: 'assets/images/quality-on-demand/usecase3.jpg'
                },
                {
                    title: "Advanced Online Learning",
                    content:`Optimizes advanced online learning by ensuring stable, high-quality video for XR-based seminars and interactive educational experiences. By dynamically adjusting network performance, it minimizes latency, buffering, and quality fluctuations, allowing seamless engagement in virtual classrooms. This enables students and educators to interact in immersive learning environments with clarity and reliability.`,
                    image: 'assets/images/quality-on-demand/usecase4.jpg'
                },
                {
                    title: "Industry 4.0 Digitalization",
                    content:`Supports Industry 4.0 digitalization by enabling real-time interaction with digital twins, automated monitoring, and drone-based delivery. By optimizing network performance, it ensures low-latency communication and stable connectivity for seamless data exchange. This allows businesses to enhance operational efficiency, improve predictive maintenance, and streamline logistics with reliable and responsive industrial automation.`,
                    image: 'assets/images/quality-on-demand/usecase5.jpg'
                },
                {
                    title: "Next-Generation Design & Construction",
                    content:`Boosts next-generation design and construction by ensuring seamless AR visualization, reducing errors, and improving collaboration. By optimizing network performance, it enables real-time, high-resolution rendering of architectural models, allowing teams to detect issues early, streamline workflows, and enhance decision-making with accurate, immersive project representations.`,
                    image: 'assets/images/quality-on-demand/usecase6.jpg'
                },
            ]
            },
        // caseStudies: {
        //     title: "Case studies",
        //     content: [
        //         {
        //             title: "Smarter banks",
        //             content: `Daycoval is one of the most recognised financial institutions in Brazil, with more than USD 13 billion in assets. 
        //             Thanks to Open Gateway, it has begun collaborating with Vivo, Telefonica's carrier in Brazil, to explore the benefits that telco APIs can have in bringing a better user experience to its digital services. 
        //             One of the  areas for improvement in the banking applications is the process of  signing up for a new product or opening a new account. 
        //             Thanks to the integration of Device Location Verification, Daycoval can ask Vivo to  verify the location of its users to automate steps when performing  different banking operations. 
        //             This allows for the development of new, smarter and more efficient fintech services, increasing customer satisfaction.`,
        //             image: "#"
        //         },
        //         {
        //             title: "Drone fleet control",
        //             content: `The delivery of parcels by drone requires reliable location control to ensure the location of the devices in real time with maximum security. 
        //             Ericsson and Vonage are teaming up to offer developers the ability to integrate Open Gateway solutions to enhance their users experience of Open Gateway applications. 
        //             By integrating the  Device Location Verification API, advanced network capabilities can be incorporated to quickly and easily verify a drone's position. 
        //             This makes it possible to develop new applications that provide maximum security  in controlling drone fleets.`,
        //             image: "#"
        //         }]
        //     },
    },
    documentation:{
        introduction: {
            title: 'Introduction',
            content: `The QoD (Quality on Demand) Camara API allows API Consumers to request and manage network quality adjustments based on specific needs. The API provides a mechanism to dynamically optimize network conditions for various applications, ensuring enhanced performance, reduced latency, and improved connectivity. The requester can specify parameters such as required bandwidth, latency constraints, or priority levels for different services (e.g., gaming, video streaming, remote work). The system evaluates network conditions and applies optimizations accordingly. The API is beneficial for scenarios like online gaming, ensuring low-latency, lag-free experiences; video streaming, guaranteeing smooth playback with minimal buffering; enterprise applications, enhancing real-time collaboration and remote work efficiency; and IoT and Smart Mobility, maintaining connectivity for critical smart devices.`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `A Device refers to any physical entity capable of connecting to a network and requiring QoS optimization. Quality on Demand (QoD) is the ability to dynamically request specific network quality enhancements based on user needs. Latency represents the time delay in data transmission, which is critical for real-time applications. Bandwidth denotes the amount of data that can be transmitted over a network within a specific period. Priority level serves as a ranking mechanism that determines how network resources are allocated among different applications. Optimization Duration defines the period during which the requested network optimizations remain active, ensuring consistent performance improvements as needed.`
        },
        functionality: {
            title: "API Functionality",
            content: `The API exposes a single primary endpoint: /request-qod allows the requester to specify the required network quality parameters for a given device or application. Request parameters include deviceId, a unique identifier of the device requesting QoD; latencyRequirement, the maximum acceptable latency in milliseconds; bandwidthRequirement, the minimum required bandwidth in Mbps; priorityLevel, indicating the priority level (e.g., high, medium, low); and duration, the time duration for which QoD is required. The response includes confirmation of the QoD request, expected network performance after optimization, and a timestamp indicating when optimization starts.`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `The "Camara Security and Interoperability Profile" outlines authentication mechanisms for API access. API consumers must obtain an access token through a secure authentication process. Authorization follows these principles: Three-legged OAuth (3-legged OAuth), used when user consent is required (e.g., user-specific QoD optimizations); Two-legged OAuth (2-legged OAuth), used for system-level requests where no specific user data is involved. access token validation, ensuring that API calls adhere to security policies; and user consent, required when QoD involves personal devices, with explicit user permission.`
        },
        indentify: {
            title: "Identifying a device from the access token",
            content: `The API supports optional device identification based on the access token. For 3-legged tokens, the device linked to the token is assumed to be the requester. If a device ID is provided, it must match the one associated with the token. For 2-legged tokens, the device ID must be explicitly provided in the request.`
        },
        sandboxSwagger: "/assets/images/quality-on-demand/openapi.json"
    },
    sandbox:{
        sandboxUrl: "#"
    },
    term: {
        terms:{
            title: "Terms List",
            content:[
                {
                    title: "Term 1",
                    content: `Users must ensure that any data submitted through this API complies with applicable laws and regulations. 
                    Unauthorized or malicious use of the API is strictly prohibited.`
                },
                {
                    title: "Term 2",
                    content: `Access to this API is provided on an "as-is" basis. 
                    The provider is not responsible for any data loss, service disruption, or unintended consequences resulting from its use.`
                }
            ]
        },
        generalTerm:{
            title: "General Terms and Condition",
            content: "By using this API, you also agree with our General Terms and Condition."
        }
    },
    contact: '#'
}