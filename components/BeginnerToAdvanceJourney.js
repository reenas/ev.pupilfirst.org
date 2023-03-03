export default function BeginnerToAdvanceJourney() {
  return (
    <div>
      <div>
        <div>
          <div className="flex space-x-2 lg:space-x-4">
            <div className="flex flex-col">
              <div className="flex h-2/5">
                <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                  <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center justify-center absolute inset-0 transform -rotate-90">
                    EV 101
                  </p>
                </div>
              </div>
              <div className="h-10"></div>
              <div className="flex h-3/5">
                <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                  <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-primary-400 items-center justify-center absolute inset-0 transform -rotate-90">
                    EV 201
                  </p>
                </div>
              </div>
            </div>
            <div className="block relative w-12 md:w-24 bg-gray-800 ">
              <div className="flex items-center justify-center absolute z-0 inset-0 h-full">
                <svg
                  className=""
                  width="2"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    className="path"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="white"
                  />
                </svg>
              </div>
              <div className="flex whitespace-nowrap text-base items-center sticky top-0 z-20">
                <div className="flex relative w-full justify-end items-end h-20 md:h-24">
                  <div>
                    <div className="relative">
                      <div className="flex text-xs text-secondary-200 font-semibold absolute z-20 right-0 transform -rotate-90 mt-14 md:mt-16">
                        <span className="block md:pb-2 md:pr-2">Skills</span>
                      </div>
                    </div>
                    <div className="flex justify-end w-full">
                      <img
                        className="object-contain relative h-full w-8 md:w-12"
                        src="course-path/ev-car-sticky.png"
                        alt="Electric Car"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0">
                <div className="w-4 h-2/5"></div>
                <div className="relative z-10 grid grid-cols-7 gap-1 md:gap-2 h-10 w-12 md:w-24 md:h-10 -mt-4">
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                </div>
                <div className="w-4 h-3/5"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col h-2/5 space-y-2 pb-5">
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                    1
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                    <p className="text-sm md:text-base font-semibold text-secondary-400">
                      Fundamentals of electric vehicles.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                    2
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                    <p className="text-sm md:text-base font-semibold text-secondary-400">
                      Drive Cycles &amp; calculating energy consumption.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                    3
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                    <p className="text-sm md:text-base font-semibold text-secondary-400">
                      Mathematical modeling for an EV conversion.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">
                    4
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                    <p className="text-sm md:text-base font-semibold text-secondary-400">
                      Basic battery architecture for EVs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-3/5 space-y-2 pt-5">
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                    1
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                    <p className="text-sm md:text-base font-semibold text-primary-400">
                      Building and visualizing a 3 pole brushless DC motor.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                    2
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                    <p className="text-sm md:text-base font-semibold text-primary-400">
                      Motor control for BLDC motors.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                    3
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                    <p className="text-sm md:text-base font-semibold text-primary-400">
                      Basics of Lithium-ion batteries and designing battery
                      packs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                    4
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                    <p className="text-sm md:text-base font-semibold text-primary-400">
                      Battery managements systems for EVs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1">
                  <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">
                    5
                  </p>
                  <div className="flex-1 px-3 py-2 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                    <p className="text-sm md:text-base font-semibold text-primary-400">
                      Communication protocols &amp; electronic noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
