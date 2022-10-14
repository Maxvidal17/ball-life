import React, { useState, Fragment } from 'react'
import { CheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition, Dialog } from '@headlessui/react'

const meetings = [
    {
        id: 1,
        date: 'January 10th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Alexander Bennet',
        imageUrl:
        'https://images.sidearmdev.com/resize?url=https://s3.amazonaws.com/sidearm.sites/nicholls.sidearmsports.com/images/2019/11/1/0912_kacie_fountain_2019.jpg&width=300&height=&type=jpeg&gravity=&quality=',
        location: 'Ocala Park',
    },
    {
        id: 1,
        date: 'January 11th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Jane Guard',
        imageUrl:
            'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Weee8EDEy3quoDiaE7UcZWEJSgs=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/EPJXK72OJHVGAV2KAXEJF5HC7Y.jpg',
        location: 'Ocala Park',
    },
    {
        id: 1,
        date: 'January 12th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Ben Kenobi',
        imageUrl:
            'https://clemsontigers.com/wp-content/uploads/2022/07/CLEMSON_BEADLE_JOSH-768x1024.jpg',
        location: 'Ocala Park',
    },
    {
        id: 1,
        date: 'January 14th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Shaquille O Neal',
        imageUrl:
            'https://cdn.nba.com/headshots/nba/latest/1040x760/406.png',
        location: 'Ocala Park',
    },
    {
        id: 1,
        date: 'January 15th, 2022',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Micheal Jordan',
        imageUrl:
        'https://banner2.cleanpng.com/20180616/cpx/kisspng-michael-jordan-basketball-player-nba-february-17-dennis-rodman-5b24951e5b5683.8798576715291241263741.jpg',
        location: 'Ocala Park',
    },
    // More meetings...
]
const days = [
    { date: '2021-12-27' },
    { date: '2021-12-28' },
    { date: '2021-12-29' },
    { date: '2021-12-30' },
    { date: '2021-12-31' },
    { date: '2022-01-01', isCurrentMonth: true },
    { date: '2022-01-02', isCurrentMonth: true },
    { date: '2022-01-03', isCurrentMonth: true },
    { date: '2022-01-04', isCurrentMonth: true },
    { date: '2022-01-05', isCurrentMonth: true },
    { date: '2022-01-06', isCurrentMonth: true },
    { date: '2022-01-07', isCurrentMonth: true },
    { date: '2022-01-08', isCurrentMonth: true },
    { date: '2022-01-09', isCurrentMonth: true },
    { date: '2022-01-10', isCurrentMonth: true },
    { date: '2022-01-11', isCurrentMonth: true },
    { date: '2022-01-12', isCurrentMonth: true, isToday: true },
    { date: '2022-01-13', isCurrentMonth: true },
    { date: '2022-01-14', isCurrentMonth: true },
    { date: '2022-01-15', isCurrentMonth: true },
    { date: '2022-01-16', isCurrentMonth: true },
    { date: '2022-01-17', isCurrentMonth: true },
    { date: '2022-01-18', isCurrentMonth: true },
    { date: '2022-01-19', isCurrentMonth: true },
    { date: '2022-01-20', isCurrentMonth: true },
    { date: '2022-01-21', isCurrentMonth: true },
    { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
    { date: '2022-01-23', isCurrentMonth: true },
    { date: '2022-01-24', isCurrentMonth: true },
    { date: '2022-01-25', isCurrentMonth: true },
    { date: '2022-01-26', isCurrentMonth: true },
    { date: '2022-01-27', isCurrentMonth: true },
    { date: '2022-01-28', isCurrentMonth: true },
    { date: '2022-01-29', isCurrentMonth: true },
    { date: '2022-01-30', isCurrentMonth: true },
    { date: '2022-01-31', isCurrentMonth: true },
    { date: '2022-02-01' },
    { date: '2022-02-02' },
    { date: '2022-02-03' },
    { date: '2022-02-04' },
    { date: '2022-02-05' },
    { date: '2022-02-06' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CreateEvent = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                            <RocketLaunchIcon className="h-6 w-6 text-orange-600" aria-hidden="true" />

                                        </div>

                                        <div className='mt-5'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Micheal Jordan"
                                                />
                                            </div>
                                        </div>

                                        <div className='mt-5'>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className='mt-5'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Park
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Ocala Park"
                                                />
                                            </div>
                                        </div>

                                        <div className='mt-5'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Date
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="date"
                                                    name="name"
                                                    id="name"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
                                            onClick={() => setOpen()}
                                        >
                                            Create Event
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

const Calendar = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <CreateEvent />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="text-lg mt-6 font-semibold text-gray-900">Upcoming Games</h2>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                        <div className="flex items-center text-gray-900">
                            <button
                                type="button"
                                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <div className="flex-auto font-semibold">January</div>
                            <button
                                type="button"
                                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                            {days.map((day, dayIdx) => (
                                <button
                                    key={day.date}
                                    type="button"
                                    className={classNames(
                                        'py-1.5 hover:bg-gray-100 focus:z-10',
                                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                        (day.isSelected || day.isToday) && 'font-semibold',
                                        day.isSelected && 'text-white',
                                        !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                        !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                        day.isToday && !day.isSelected && 'text-orange-600',
                                        dayIdx === 0 && 'rounded-tl-lg',
                                        dayIdx === 6 && 'rounded-tr-lg',
                                        dayIdx === days.length - 7 && 'rounded-bl-lg',
                                        dayIdx === days.length - 1 && 'rounded-br-lg'
                                    )}
                                >
                                    <time
                                        dateTime={day.date}
                                        className={classNames(
                                            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                            day.isSelected && day.isToday && 'bg-orange-600',
                                            day.isSelected && !day.isToday && 'bg-gray-900'
                                        )}
                                    >
                                        {day.date.split('-').pop().replace(/^0/, '')}
                                    </time>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            type="button"
                            className="mt-8 w-full rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Add Game
                        </button>
                    </div>
                    <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                        {meetings.map((meeting) => (
                            <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
                                <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full fit-image" />
                                <div className="flex-auto">
                                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0 align-text">{meeting.name}</h3>
                                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                        <div className="flex items-start space-x-3">
                                            <dt className="mt-0.5">
                                                <span className="sr-only">Date</span>
                                                <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </dt>
                                            <dd>
                                                <time dateTime={meeting.datetime}>
                                                    {meeting.date} at {meeting.time}
                                                </time>
                                            </dd>
                                        </div>
                                        <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                            <dt className="mt-0.5">
                                                <span className="sr-only">Location</span>
                                                <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </dt>
                                            <dd>{meeting.location}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <Menu as="div" className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                                    <div>
                                        <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                                            <span className="sr-only">Open options</span>
                                            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Edit
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Cancel
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>

    )
}

export default Calendar;