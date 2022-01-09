lazyCoding=('zero' 'one' 'two' 'three' 'four' 'five' 'six' 'seven' 'eight' 'nine') # doesnt work on 10 cause it's 2 digit... just do 10s after.
for file in [2-9]*.png ; do
	firstLetter=${file:0:1}
	echo $firstLetter
	lettersLeft=${#file}
	restOfFile=${file:1:${lettersLeft}}
	finalFileName=${soLazyLul[$firstLetter]}${restOfFile}
	mv $file $finalFileName
done
for tens in 10*.png ; do
	lettersLeft=${#file}
	mv $file ten$file:2:lettersLeft
done