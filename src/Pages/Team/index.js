import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Jane Cooper',
        title: 'Power Forward',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.sidearmdev.com/resize?url=https://s3.amazonaws.com/sidearm.sites/nicholls.sidearmsports.com/images/2019/11/1/0912_kacie_fountain_2019.jpg&width=300&height=&type=jpeg&gravity=&quality=',
    },
    {
        name: 'Jane Cooper',
        title: 'Shooting Guard',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Weee8EDEy3quoDiaE7UcZWEJSgs=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/EPJXK72OJHVGAV2KAXEJF5HC7Y.jpg',
    },
    {
        name: 'Jane Cooper',
        title: 'Small Forward',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://banner2.cleanpng.com/20180616/cpx/kisspng-michael-jordan-basketball-player-nba-february-17-dennis-rodman-5b24951e5b5683.8798576715291241263741.jpg',
    },
    {
        name: 'Jane Cooper',
        title: 'Point Guard',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/f/f6/Shaquille_O%27Neal_October_2017_%28cropped%29.jpg',
    },
    {
        name: 'Jane Cooper',
        title: 'Center',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://www.jetpunk.com/img/user-photo-library/4d/4d5283e72f-450.jpg',
    },
    {
        name: 'Jane Cooper',
        title: 'Shooting Guard',
        role: 'Available',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:"https://hawkeyesports.com/imgproxy/MCliWBRAseLfFfnaB0FKXwvsGS0pBVXUlIumWoAAPkQ/fit/600/800/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2hhd2tleWVzcG9ydHMtY29tLzIwMjEvMDkvMjg1Yjg4MDQtMjAyMTA5MTNfaW93YV9tZW5zX2Jhc2tldGJhbGxfaGVhZF9zaG90c19maWxpcF9yZWJyYWNhXzAwMi5qcGc.jpg"    
    },
    // More people...
]

const Team = () => {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-8">
            <h2 className="text-lg mt-6 font-semibold text-gray-900 p-4">Your Team</h2>

            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {people.map((person) => (
                    <li
                        key={person.imageUrl}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <div className="flex flex-1 flex-col p-8">
                            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full fit-image" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                            <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                        {person.role}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                    <a
                                        href={`mailto:${person.email}`}
                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                    >
                                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">Email</span>
                                    </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                    <a
                                        href={`tel:${person.telephone}`}
                                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                    >
                                        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">Call</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Team;