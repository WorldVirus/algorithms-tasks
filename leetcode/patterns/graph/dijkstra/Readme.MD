Shortest path from one node to all nodes 

[GO Realization of Dijkstra](https://dev.to/douglasmakey/implementation-of-dijkstra-using-heap-in-go-6e3)
Pseudo-Code:

    for each vertex V in G
        distance[V] <- infinite
        previous[V] <- NULL
        If V != S, add V to Priority Queue Q

    distance[S] <- 0
    while Q IS NOT EMPTY
        U <- Extract MIN from Q
        for each unvisited neighbour V of U
            tempDistance <- distance[U] + edge_weight(U, V)
            if tempDistance < distance[V]
                distance[V] <- tempDistance
                previous[V] <- U

    return distance[], previous[]

Time: O(E + V Log V) if using heap if dont use it will be O(E + V^2)

Space: O(V + E)

[Watch the video of Michael Sambol](https://www.youtube.com/watch?v=_lHSawdgXpI)