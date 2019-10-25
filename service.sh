#!/bin/bash

CMD=$1

if [ "$CMD" == "build" ]; then

	if [ -d "./build" ]; then
		rm -r build/backbone
		rm -r build/vanilla
		rm -r build/hyperapp
		rm -r build/react
		rm -r build/vue
	fi

	cp -rL ./backbone ./build/backbone
	cp -rL ./vanilla  ./build/vanilla

	if [ -d "./hyperapp/dist" ]; then
		cp -rL ./hyperapp/dist/ ./build/hyperapp
	else
		echo "Warning: Hyperapp dist missing!"
		echo "Go to ./hyperapp & run $ npm run build"
	fi

	if [ -d "./reactjs/build" ]; then
		cp -rL ./reactjs/build/ ./build/react
	else
		echo "Warning: reactjs build missing!"
		echo "Go to ./reactjs & run $ npm run build"
	fi

	if [ -d "./vue/dist" ]; then
		cp -rL ./vue/dist/ ./build/vue
	else
		echo "Warning: VueJS dist missing!"
		echo "Go to ./vue & run $ npm run build"
	fi

	exit 0

elif [ "$CMD" == "build-clear" ]; then
	rm -r build/backbone
	rm -r build/vanilla
	rm -r build/hyperapp
	rm -r build/reactjs
	rm -r build/vue
	exit 0
fi

echo "no command specified!";