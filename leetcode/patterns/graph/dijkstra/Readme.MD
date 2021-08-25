Shortest path from one node to all nodes 

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

Time: O(E Log V)

Space: O(V)

[Watch the video of Michael Sambol](https://www.youtube.com/watch?v=_lHSawdgXpI)