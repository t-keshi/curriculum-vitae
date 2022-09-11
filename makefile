all:
	cat ./src/posts/*.mdx > ./src/posts/all.md

.PHONY : clean